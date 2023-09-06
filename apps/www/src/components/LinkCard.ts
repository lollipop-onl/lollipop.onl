import { LitElement, html } from 'lit';
import { state, property } from 'lit/decorators.js';

export class LinkCard extends LitElement {
  @property({ type: String })
  url: string = '';

  @state()
  data: any | undefined;

  connectedCallback() {
    super.connectedCallback();

    this.fetchInfo();
  }

  get domain() {
    const url = new URL(this.url);

    return url.hostname;
  }

  async fetchInfo() {
    const url = new URL('http://localhost:8082/info');

    url.searchParams.append('url', this.url);

    const res = await fetch(url);

    if (!res.ok) return;

    this.data = await res.json();
  }

  // without Shadow DOM
  createRenderRoot() {
    return this;
  }

  render() {
    if (!this.data) {
      return html` <a href="${this.url}" target="_blank">${this.url}</a> `;
    }

    return html`
      <div>
        <a
          class="border-divider hover:bg-secondary block overflow-hidden rounded-md border no-underline"
          href="${this.url}"
          target="_blank"
        >
          <span class="flex h-32 items-center justify-between gap-2">
            <span class="p-4">
              <span class="text-md text-body line-clamp-2 font-medium">
                ${this.data.title}
              </span>
              ${this.data.description &&
              html`
                <span class="text-description mt-1 line-clamp-1 text-sm">
                  ${this.data.description}
                </span>
              `}
              <span class="text-body mt-3 flex items-center gap-2 text-xs">
                <img
                  class="aspect-square h-4 w-4"
                  src="https://www.google.com/s2/favicons?domain=${this.domain}"
                  alt=""
                />
                <span class="leading-md">
                  ${this.data.siteName || this.domain}
                </span>
              </span>
            </span>
            <img
              class="aspect-square h-full object-cover md:aspect-auto"
              src="${this.data.imageUrl}"
              alt="リンク先ページのサムネイル"
            />
          </span>
        </a>
      </div>
    `;
  }
}
