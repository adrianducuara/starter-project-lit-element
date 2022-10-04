import { LitElement, css, html } from "lit-element";

class CardProduct extends LitElement {
  constructor() {
    super();
    
  }
  static get styles() {
    return css `
      :host {
        background-color: var(--primary-color, white);
        color: var(--secondary-color, black);
        font-size: var(--size-sm, 16px);
      }

      .product-container {
        align-items: center;
        box-sizing: border-box;
        box-shadow: 0 1px 2px 0 rgb(0, 0, 0, 25%);
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        flex-direction: column;
        justify-content: center;
        min-width: 320px;
        max-width: 900px;
        padding: 20px;
        width: 100%;
      }

      .title-product {
        font-size: 2.8rem;
      }

      .subtitle-product {
        color: rgba(0, 0, 0, .55);
        font-size: 2.5rem;
        margin-left: 14px;
      }

      .container-img {
        margin: 0;
      }

      .image-product {
        object-fit: contain;
        width: 100%;
      }

      .price-product {
        float: left;
        font-size: 2rem;
        line-height: 2;
        margin: 0;
      }

      .button-product {
        border-color: transparent;
        background-color: var(--third-color, #3483fa);
        border-radius: 6px;
        cursor: pointer;
        color: var(--secundary-color, #FFF);
        height: 40px;
        float: right;
        max-width: 150px;
        width: 100%;
      }

      @media(min-width: 1024px) {
        .product-container {
          height: 400px;
          flex-direction: row;
        }

        .container-img {
          display: flex;
          height: 400px;
          width: 400px
        }

        .container-detail {
          margin-left: 30px;
        }

        .title-product {
          font-size: 4rem;
        }

        .subtitle-product {
          font-size: 3rem;
        }

        .description-product {
          line-height: 1.5;
        }

        .price-product {
          font-size: 2.8rem;
          line-height: 1.5;
        }

        .button-product {
          max-width: 200px;
          font-size: 1.6rem;
        }
      }

    `;
  }
  static get properties() {
    return {
      titleProduct: {type: String},
      urlImg: {type: String},
      subtitleProduct: {type: String},
      descriptionProduct: {type: String},
      priceProduct: {type: String},
      textButton: {type: String}
    }
  }
  render() {
    return html `
      <article class="product-container">
        <div class="main-container-img">
          <figure class="container-img">
            <img class="image-product" src=${this.urlImg} alt=${'Imagen del producto ' + this.titleProduct} />
          </figure>
        </div>
        <div class="container-detail">
          <h2 class="title-product">${this.titleProduct}<span class="subtitle-product">${this.subtitleProduct}</span></h2>
          <p class="description-product">${this.descriptionProduct}</p>
          <h3 class="price-product">${this.priceProduct}</h3>
          <button class="button-product">${this.textButton}</button>
        </div>
      </article>
    `;
  }

}

window.customElements.define('card-product', CardProduct);