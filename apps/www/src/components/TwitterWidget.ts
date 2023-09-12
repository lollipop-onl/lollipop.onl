import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import loadjs from 'loadjs';

const TW_SCRIPT_URL = 'https://platform.twitter.com/widgets.js';
const TW_FIELD_NAME = 'twttr';

type TwitterWidgets = {
  createTweet: (tweetId: string, container: HTMLElement, options: any) => void;
};

export class TwitterWidget extends LitElement {
  @property()
  tweetid: string = '';

  connectedCallback(): void {
    super.connectedCallback();

    this.initializeWidget();
  }

  async initializeWidget(): Promise<void> {
    const widget = await this.loadWidget();

    console.log(this.tweetid);

    widget.createTweet(this.tweetid, this.querySelector('.tweet')!, {
      theme: 'light',
    });
  }

  loadWidget(): Promise<TwitterWidgets> {
    return new Promise<TwitterWidgets>((resolve, reject) => {
      const rejectWithError = () => {
        reject(new Error('twitter widget load failed'));
      };

      if (!loadjs.isDefined(TW_FIELD_NAME)) {
        loadjs(TW_SCRIPT_URL, TW_FIELD_NAME);
      }

      loadjs.ready(TW_FIELD_NAME, {
        success() {
          // @ts-expect-error
          if (!window[TW_FIELD_NAME]) {
            return rejectWithError();
          }
          // @ts-expect-error
          resolve(window[TW_FIELD_NAME]?.widgets);
        },
        error: rejectWithError,
      });
    });
  }

  // without Shadow DOM
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class="tweet grid place-items-center"></div>`;
  }
}
