import { LitElement, html } from 'lit';
import { state, property } from 'lit/decorators.js';

export class LinkCard extends LitElement {
  @property({ type: String })
  url: string = '';

  @state()
  data: any | undefined;

  get domain() {
    const url = new URL(this.url);

    return url.hostname;
  }

  get isInline() {
    return this.parentElement?.tagName === 'P';
  }

  connectedCallback() {
    super.connectedCallback();

    this.fetchInfo();
  }

  async fetchInfo() {
    const workerEndpoint = new URL(import.meta.env.PUBLIC_WORKER_OGP_ENDPOINT);
    const url = new URL(this.url);

    // レスポンスに寄与しないはずのハッシュを削除
    url.hash = '';

    workerEndpoint.searchParams.append('url', url.toString());

    const res = await fetch(workerEndpoint);

    if (!res.ok) return;

    this.data = await res.json();
  }

  // without Shadow DOM
  createRenderRoot() {
    return this;
  }

  render() {
    if (!this.data) {
      return html`<a href="${this.url}" target="_blank">${this.url}</a>`;
    }

    if (this.isInline) {
      return html`
        <a class="px-1" href="${this.url}" target="_blank">
          ${this.data.title}
          <span class="icon-[carbon--launch] h-4 w-4 translate-y-0.5" />
        </a>
      `;
    }

    return html`
      <div>
        <a
          class="border-divider hover:bg-secondary block overflow-hidden rounded-md border no-underline"
          href="${this.url}"
          target="_blank"
        >
          <span class="flex h-32 items-center justify-between gap-2">
            <span class="overflow-hidden p-4">
              <span class="text-body flex items-center gap-2 text-xs">
                <img
                  class="aspect-square h-4 w-4"
                  src="https://www.google.com/s2/favicons?domain=${this.domain}"
                  alt=""
                />
                <span class="leading-md">
                  ${this.data.siteName || this.domain}
                </span>
              </span>
              <span class="text-md text-body mt-2 line-clamp-2 font-medium">
                ${this.data.title}
              </span>
              ${this.data.description &&
              html`
                <span class="text-description mt-1 line-clamp-1 text-sm">
                  ${this.data.description}
                </span>
              `}
            </span>
            ${this.data.imageUrl &&
            html`
              <img
                class="aspect-square h-full object-cover md:aspect-auto"
                src="${this.data.imageUrl}"
                alt="リンク先ページのサムネイル"
              />
            `}
          </span>
        </a>
      </div>
    `;
  }
}
