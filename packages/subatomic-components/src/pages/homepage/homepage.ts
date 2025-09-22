import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, state } from 'lit/decorators.js';
import heroImg from '../../assets/bg-ice-cream-texture.jpg';
import mokaModeImg from '../../assets/moka-mode.png';
import strawberryImg from '../../assets/strawberry.png';
import threeTierSundaeImg from '../../assets/three-tier-sundae.png';
import cookieDoughImg from '../../assets/cookie-dough.png';
import mintChocolateChipImg from '../../assets/mint-chocolate-chip.png';
import vanillaImg from '../../assets/vanilla.png';
import cinnamonImg from '../../assets/cinnamon.png';
import darkChocolateImg from '../../assets/dark-chocolate.png';
import marshmallowImg from '../../assets/marshmallow.png';
import bootsyImg from '../../assets/bootsy.png';
import './homepage.scss';

export class Homepage extends LitElement {
  /**
   * Tokens state that loads in JSON parsed theme file
   */
  @state() themeName: any;

  @state()
  isActive?: boolean;

  /**
   * 1) Add DOM Content Loaded event to run when the theme switches
   * 2) Timeout should match the preview.ts timeout of the theme switching
   */
  connectedCallback(): void {
    super.connectedCallback();
    globalThis.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        this.themeName = window.themeName;
      }, 1);
    });
  }

  private animateProductCards() {
    const cards = Array.from(document.querySelectorAll('.product-card-wrapper'));
    // Randomize the order of animations
    cards.forEach((card) => {
      const delay = Math.random() * 0.5; // Random delay between 0-0.5s
      (card as HTMLElement).style.setProperty('--animation-delay', `${delay}s`);
    });
  }

  firstUpdated() {
    this.animateProductCards();
  }

  toggleIsActive() {
    this.isActive = !this.isActive;

    if (this.isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  render() {
    const componentClassName = classMap({
      'course-homepage': true
    });

    return html`
      <div class="${componentClassName}">
        <header class="ds-c-header ds-c-header--transparent ds-c-header--absolute ${this.isActive ? 'ds-is-active' : ''}">
          <div class="ds-c-layout-container ">
            <div class="ds-c-header__inner">
              <a class="ds-c-logo" href="/">
                <span class="ds-u-is-vishidden">Frost'd Tokens</span>
                <svg class="ds-c-logo__image" xmlns="http://www.w3.org/2000/svg" width="171" height="31" fill="none">
                  <circle cx="12" cy="16" r="12" class="ds-c-logo__circle" />
                  <path
                    d="M28.28 28V4.48h8.224v3.552h-4.768v6.176h3.2v3.552h-3.2V28H28.28Zm9.625 0V4.48h3.456c2.07 0 3.595.576 4.576 1.728.981 1.141 1.472 2.827 1.472 5.056 0 1.323-.235 2.47-.704 3.44-.459.96-1.019 1.664-1.68 2.112L47.377 28h-3.456l-1.952-9.92h-.608V28h-3.456Zm3.456-13.12c.64 0 1.147-.139 1.52-.416.373-.288.64-.693.8-1.216.16-.523.24-1.141.24-1.856 0-1.12-.187-1.979-.56-2.576-.363-.608-1.03-.912-2-.912v6.976Zm12.43 13.376c-.96 0-1.787-.224-2.48-.672a4.47 4.47 0 0 1-1.584-1.824c-.363-.768-.544-1.632-.544-2.592V9.312c0-.97.18-1.835.544-2.592a4.47 4.47 0 0 1 1.584-1.824c.693-.448 1.52-.672 2.48-.672s1.78.224 2.464.672a4.32 4.32 0 0 1 1.584 1.824c.373.768.56 1.632.56 2.592v13.856c0 .96-.187 1.824-.56 2.592a4.32 4.32 0 0 1-1.584 1.824c-.683.448-1.505.672-2.465.672Zm0-3.36c.426 0 .725-.176.896-.528.17-.363.256-.763.256-1.2V9.312c0-.437-.091-.832-.273-1.184-.18-.363-.474-.544-.88-.544-.394 0-.688.181-.88.544a2.547 2.547 0 0 0-.271 1.184v13.856c0 .437.09.837.271 1.2.182.352.475.528.88.528Zm11.18 3.36c-.95 0-1.738-.155-2.368-.464a3.63 3.63 0 0 1-1.488-1.376c-.362-.597-.624-1.317-.784-2.16-.15-.843-.224-1.792-.224-2.848l3.392-.32c0 .512.016 1.008.048 1.488.043.47.112.896.208 1.28.107.373.256.672.448.896a.99.99 0 0 0 .768.336c.512 0 .875-.235 1.088-.704.214-.48.32-1.056.32-1.728 0-.672-.176-1.37-.528-2.096a12.454 12.454 0 0 0-1.264-2.064 65.63 65.63 0 0 1-2.192-3.088 14.987 14.987 0 0 1-1.456-2.8 8.19 8.19 0 0 1-.512-2.88c0-.79.102-1.515.304-2.176a5.262 5.262 0 0 1 .88-1.744c.395-.501.87-.89 1.424-1.168.555-.277 1.19-.416 1.904-.416.886 0 1.632.15 2.24.448a3.694 3.694 0 0 1 1.488 1.28c.384.555.662 1.216.832 1.984.182.757.272 1.6.272 2.528l-3.392.32c0-.395-.021-.79-.064-1.184a5.523 5.523 0 0 0-.192-1.104 2.03 2.03 0 0 0-.416-.8.901.901 0 0 0-.704-.304c-.448 0-.757.192-.928.576-.17.373-.256.907-.256 1.6 0 .896.24 1.76.72 2.592.48.832 1.126 1.803 1.936 2.912.97 1.312 1.76 2.517 2.368 3.616.619 1.099.928 2.315.928 3.648a9.68 9.68 0 0 1-.272 2.352 5.303 5.303 0 0 1-.864 1.872c-.384.533-.88.95-1.488 1.248-.597.299-1.322.448-2.176.448ZM73.928 28V8.032h-3.264V4.48h9.984v3.552h-3.264V28h-3.456Zm7.745-15.808 1.12-4.16h-1.12V4.48h3.36v3.552l-1.76 4.16h-1.6ZM87.093 28V4.48h3.52c1.109 0 2.047.181 2.816.544.767.363 1.386.981 1.855 1.856.47.875.806 2.075 1.008 3.6.214 1.525.32 3.45.32 5.776 0 2.336-.106 4.267-.32 5.792-.202 1.515-.538 2.71-1.008 3.584-.469.864-1.088 1.477-1.856 1.84-.767.352-1.706.528-2.816.528h-3.52Zm3.456-3.456c.853 0 1.455-.336 1.807-1.008.353-.672.566-1.632.64-2.88.075-1.248.113-2.73.113-4.448 0-1.739-.038-3.221-.112-4.448-.075-1.237-.294-2.181-.656-2.832-.352-.661-.95-.992-1.792-.992v16.608ZM106.24 28V8.032h-3.264V4.48h9.984v3.552h-3.264V28h-3.456Zm12.769.256c-.96 0-1.786-.224-2.48-.672a4.48 4.48 0 0 1-1.584-1.824c-.362-.768-.544-1.632-.544-2.592V9.312c0-.97.182-1.835.544-2.592a4.48 4.48 0 0 1 1.584-1.824c.694-.448 1.52-.672 2.48-.672s1.782.224 2.464.672a4.31 4.31 0 0 1 1.584 1.824c.374.768.56 1.632.56 2.592v13.856c0 .96-.186 1.824-.56 2.592a4.31 4.31 0 0 1-1.584 1.824c-.682.448-1.504.672-2.464.672Zm0-3.36c.427 0 .726-.176.896-.528.171-.363.256-.763.256-1.2V9.312c0-.437-.09-.832-.272-1.184-.181-.363-.474-.544-.88-.544-.394 0-.688.181-.88.544a2.551 2.551 0 0 0-.272 1.184v13.856c0 .437.091.837.272 1.2.182.352.475.528.88.528ZM126.03 28V4.48h3.456v8.224h.128l.16-.384 2.688-7.84h3.552l-3.168 7.744L136.43 28h-3.552l-2.304-10.72h-.096l-.992 2.4V28h-3.456Zm12 0V4.48h7.904v3.552h-4.448v6.336h3.2v3.456h-3.2v6.624h4.448V28h-7.904Zm10.469 0V4.48h3.232l3.2 12.256.288 1.088h.192V4.48h3.168V28h-2.912l-3.52-12.256-.288-1.088h-.192V28h-3.168Zm16.785.256c-.95 0-1.739-.155-2.368-.464a3.623 3.623 0 0 1-1.488-1.376c-.363-.597-.624-1.317-.784-2.16-.15-.843-.224-1.792-.224-2.848l3.392-.32c0 .512.016 1.008.048 1.488.042.47.112.896.208 1.28.106.373.256.672.448.896a.99.99 0 0 0 .768.336c.512 0 .874-.235 1.088-.704.213-.48.32-1.056.32-1.728 0-.672-.176-1.37-.528-2.096a12.494 12.494 0 0 0-1.264-2.064 65.409 65.409 0 0 1-2.192-3.088 14.969 14.969 0 0 1-1.456-2.8 8.176 8.176 0 0 1-.512-2.88c0-.79.101-1.515.304-2.176a5.25 5.25 0 0 1 .88-1.744c.394-.501.869-.89 1.424-1.168.554-.277 1.189-.416 1.904-.416.885 0 1.632.15 2.24.448a3.702 3.702 0 0 1 1.488 1.28c.384.555.661 1.216.832 1.984.181.757.272 1.6.272 2.528l-3.392.32c0-.395-.022-.79-.064-1.184a5.523 5.523 0 0 0-.192-1.104 2.033 2.033 0 0 0-.416-.8.902.902 0 0 0-.704-.304c-.448 0-.758.192-.928.576-.171.373-.256.907-.256 1.6 0 .896.24 1.76.72 2.592.48.832 1.125 1.803 1.936 2.912.97 1.312 1.76 2.517 2.368 3.616.618 1.099.928 2.315.928 3.648 0 .843-.091 1.627-.272 2.352a5.324 5.324 0 0 1-.864 1.872c-.384.533-.88.95-1.488 1.248-.598.299-1.323.448-2.176.448ZM11.699 25.928c-.239-.145-.246-.19-.246-1.445 0-.625-.014-1.136-.03-1.136-.017 0-.18.151-.363.335-.182.185-.379.36-.437.391a.494.494 0 0 1-.689-.278c-.093-.279-.042-.356.774-1.17l.745-.742v-1.986l-.193.18c-.105.099-.237.191-.293.205-.296.074-.61-.16-.61-.456 0-.086.026-.204.056-.262.031-.058.277-.325.548-.593l.492-.488v-.577c0-.318-.016-.578-.035-.578-.018 0-.485.458-1.036 1.018L9.38 19.363v1.513c0 1.412-.006 1.522-.074 1.634a.615.615 0 0 1-.433.251c-.126 0-.298-.102-.39-.23-.077-.109-.081-.164-.081-1.143v-1.029l-.353.351-.353.351.003 1.058c.002.759-.01 1.089-.045 1.164-.11.241-.507.34-.714.178-.193-.151-.22-.258-.22-.863v-.559l-.557.552c-.307.304-.596.572-.643.596a.671.671 0 0 1-.245.043c-.127 0-.189-.027-.305-.134-.136-.123-.147-.15-.147-.35v-.218l.558-.558c.306-.307.557-.571.557-.587 0-.016-.22-.029-.49-.029-.534 0-.65-.032-.797-.22-.1-.126-.108-.368-.018-.52.134-.228.184-.237 1.306-.237h1.026l.347-.34c.19-.186.347-.35.347-.366 0-.015-.463-.034-1.03-.043-.994-.016-1.033-.02-1.154-.106-.238-.17-.303-.43-.164-.658.158-.258.156-.258 1.856-.228l1.528.027 1.056-1.058 1.056-1.058H9.469l-.507.524c-.385.397-.543.534-.651.563a.486.486 0 0 1-.61-.593 1.05 1.05 0 0 1 .196-.313l.16-.181H6.063l-.711.74c-.704.732-.82.823-1.057.823-.163 0-.364-.157-.42-.328-.081-.244-.018-.374.402-.827l.378-.408h-1.1c-1.183 0-1.264-.012-1.443-.206-.2-.217-.122-.592.152-.739.12-.064.243-.071 1.236-.071h1.103l-.363-.362c-.377-.375-.443-.498-.39-.727a.563.563 0 0 1 .355-.354c.268-.074.372-.005 1.13.744l.705.699h1.94l-.14-.157c-.343-.378-.082-.914.413-.848.144.02.215.075.655.513l.492.492h1.368l-1.075-1.075-1.075-1.075h-1.51c-1.508 0-1.51 0-1.643-.09-.157-.105-.258-.346-.215-.516a.647.647 0 0 1 .166-.242l.136-.13h2.086l-.35-.35-.351-.353h-1.07c-1.022 0-1.076-.003-1.185-.08-.128-.092-.23-.265-.23-.39 0-.144.12-.345.253-.428.112-.07.194-.079.69-.079h.562l-.553-.557c-.304-.306-.572-.595-.596-.642a.672.672 0 0 1-.043-.245c0-.127.027-.189.134-.305.123-.135.15-.146.351-.146h.218l.558.557c.307.306.571.557.587.557.016 0 .029-.23.029-.512 0-.576.038-.692.258-.797a.483.483 0 0 1 .643.187c.07.115.076.202.077 1.142v1.017l.343.341c.188.188.354.341.367.341.014 0 .031-.462.039-1.027.012-.91.021-1.04.084-1.136.087-.132.289-.26.412-.26.151 0 .352.117.437.256.08.127.08.162.056 1.667l-.026 1.536 1.06 1.055 1.06 1.055v-1.3l-.491-.462c-.527-.493-.604-.597-.604-.817 0-.294.199-.489.498-.489.16 0 .265.056.47.248l.128.12v-1.991l-.73-.701c-.448-.431-.75-.753-.785-.836-.153-.366.18-.753.572-.665.097.02.239.134.51.403.206.206.388.374.404.374.016 0 .029-.523.029-1.163 0-1.084.005-1.171.076-1.288.191-.313.602-.321.82-.016.078.11.081.163.081 1.271 0 .636.013 1.157.029 1.157s.189-.16.385-.355c.397-.396.523-.454.782-.365a.469.469 0 0 1 .294.61c-.028.086-.286.373-.766.852l-.724.723v1.941l.165-.141c.193-.165.288-.195.512-.165.366.049.506.469.266.793-.062.084-.3.336-.528.562l-.415.41v1.368l2.151-2.148V11.2c0-1.446.005-1.545.076-1.685a.538.538 0 0 1 .43-.278c.13 0 .3.103.4.244.09.125.092.15.104 1.173.006.575.024 1.045.038 1.045.014 0 .18-.153.37-.34l.342-.342v-1.011c0-1.132.014-1.207.261-1.36.253-.155.574-.033.702.267.036.084.054.287.054.606V10l1.174-1.172h.218c.201 0 .227.01.351.146.107.116.134.178.134.305 0 .088-.02.198-.043.245-.024.047-.29.333-.59.636l-.546.551.36.026c.2.014.44.025.534.025.217 0 .384.086.482.247a.51.51 0 0 1-.185.697c-.134.082-.156.084-1.18.057l-1.041-.027-.332.334-.332.334h1.021c.976 0 1.025.004 1.124.082.222.174.28.456.141.681-.154.25-.182.253-1.824.253h-1.48l-1.056 1.055-1.056 1.056h1.33l.45-.453c.247-.248.497-.477.555-.508.35-.185.79.132.716.52a.749.749 0 0 1-.164.287l-.139.154h1.935l.736-.706c.493-.473.777-.717.863-.742a.478.478 0 0 1 .602.355c.05.23-.015.355-.384.731l-.355.362h1.113c1.003 0 1.126.007 1.246.071.274.147.352.522.152.739-.18.195-.258.206-1.465.206h-1.122l.395.405c.427.439.487.561.402.818-.083.252-.3.374-.574.322-.117-.021-.264-.153-.885-.786l-.744-.76h-2l.165.169c.182.186.254.372.218.563-.047.254-.351.433-.611.36-.087-.023-.296-.204-.655-.563l-.527-.528h-1.292l1.036 1.035 1.036 1.036h1.55c1.547 0 1.548 0 1.68.09.234.157.297.41.158.636-.142.233-.238.251-1.35.251-.55 0-1.001.013-1.001.029s.154.183.341.371l.342.343h1.018c.94 0 1.027.006 1.142.076a.484.484 0 0 1 .257.432.485.485 0 0 1-.257.432c-.107.065-.198.076-.633.076h-.508l.586.587.587.587v.217c0 .201-.011.227-.146.351-.117.107-.179.134-.306.134a.674.674 0 0 1-.245-.043c-.047-.024-.334-.29-.637-.59l-.551-.546-.026.267a7.004 7.004 0 0 0-.025.533c0 .29-.06.45-.204.544a.495.495 0 0 1-.69-.118c-.081-.114-.084-.156-.084-1.187v-1.07l-.324-.322a4.432 4.432 0 0 0-.342-.321c-.01 0-.018.453-.018 1.006 0 .991-.002 1.009-.091 1.134-.17.238-.395.3-.63.172-.275-.146-.277-.16-.277-1.843v-1.505l-1.046-1.046c-.576-.574-1.06-1.045-1.076-1.045-.016 0-.029.286-.029.636v.636l.472.468c.26.258.498.516.528.574.13.244.03.584-.2.68-.244.101-.445.052-.64-.157-.053-.055-.11-.1-.127-.1-.018 0-.033.433-.033.964v.965l.722.725c.396.4.74.778.764.841.113.3-.12.647-.433.647-.219 0-.323-.065-.68-.427-.172-.174-.326-.316-.343-.316-.016 0-.03.512-.03 1.137 0 1.09-.003 1.143-.081 1.252-.162.227-.427.29-.65.154Z"
                  />
                </svg>
              </a>

              <div class="ds-c-header__nav-container">
                <div class="ds-c-layout-container ">
                  <div class="ds-c-header__bottom-inner">
                    <nav class="ds-c-primary-nav" aria-label="primary navigation">
                      <ul class="ds-c-primary-nav__list">
                        <li class="ds-c-primary-nav__item">
                          <a class="ds-c-primary-nav__link" href="#">
                            <span class="ds-c-primary-nav__text">Ice cream</span>
                          </a>
                        </li>
                        <li class="ds-c-primary-nav__item">
                          <a class="ds-c-primary-nav__link" href="#">
                            <span class="ds-c-primary-nav__text">Birthdays</span>
                          </a>
                        </li>
                        <li class="ds-c-primary-nav__item">
                          <a class="ds-c-primary-nav__link" href="#">
                            <span class="ds-c-primary-nav__text">Grocery</span>
                          </a>
                        </li>
                        <li class="ds-c-primary-nav__item">
                          <a class="ds-c-primary-nav__link" href="#">
                            <span class="ds-c-primary-nav__text">Our Story</span>
                          </a>
                        </li>
                        <li class="ds-c-primary-nav__item">
                          <a class="ds-c-primary-nav__link" href="#">
                            <span class="ds-c-primary-nav__text">Contact</span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <nav class="ds-c-utility-nav" aria-label="utility navigation">
                <ul class="ds-c-utility-nav__list">
                  <li class="ds-c-utility-nav__item">
                    <a class="ds-c-utility-nav__link" href="#">Login</a>
                  </li>
                  <li class="ds-c-utility-nav__item ds-c-utility-nav__item--icon-only course-homepage__search">
                    <a class="ds-c-utility-nav__link" href="#">
                      <svg class="ds-c-utility-nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21.5306 20.4693L16.8365 15.7762C18.1971 14.1428 18.8755 12.0478 18.7307 9.92691C18.5859 7.80604 17.629 5.82265 16.0591 4.38932C14.4892 2.95599 12.4271 2.18308 10.3019 2.23138C8.17663 2.27968 6.15181 3.14547 4.64864 4.64864C3.14547 6.15181 2.27968 8.17663 2.23138 10.3019C2.18308 12.4271 2.95599 14.4892 4.38932 16.0591C5.82265 17.629 7.80604 18.5859 9.92691 18.7307C12.0478 18.8755 14.1428 18.1971 15.7762 16.8365L20.4693 21.5306C20.539 21.6003 20.6218 21.6556 20.7128 21.6933C20.8038 21.731 20.9014 21.7504 21 21.7504C21.0985 21.7504 21.1961 21.731 21.2871 21.6933C21.3782 21.6556 21.4609 21.6003 21.5306 21.5306C21.6003 21.4609 21.6556 21.3782 21.6933 21.2871C21.731 21.1961 21.7504 21.0985 21.7504 21C21.7504 20.9014 21.731 20.8038 21.6933 20.7128C21.6556 20.6218 21.6003 20.539 21.5306 20.4693ZM3.74997 10.5C3.74997 9.16495 4.14585 7.8599 4.88755 6.74987C5.62925 5.63984 6.68346 4.77467 7.91686 4.26378C9.15026 3.75289 10.5075 3.61922 11.8168 3.87967C13.1262 4.14012 14.3289 4.78299 15.2729 5.727C16.2169 6.671 16.8598 7.87374 17.1203 9.18311C17.3807 10.4925 17.2471 11.8497 16.7362 13.0831C16.2253 14.3165 15.3601 15.3707 14.2501 16.1124C13.14 16.8541 11.835 17.25 10.5 17.25C8.71037 17.248 6.99463 16.5362 5.72919 15.2708C4.46375 14.0053 3.75196 12.2896 3.74997 10.5Z"
                        ></path>
                      </svg>
                      <span class="ds-c-utility-nav__text">Search</span>
                    </a>
                  </li>

                  <li class="ds-c-utility-nav__item ds-c-utility-nav__item--icon-only">
                    <a class="ds-c-utility-nav__link" href="#">
                      <svg class="ds-c-utility-nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21.5756 4.51906C21.5052 4.43481 21.4172 4.36705 21.3177 4.32056C21.2183 4.27407 21.1098 4.24998 21 4.25H5.87625L5.30625 1.11594C5.27485 0.943126 5.1838 0.786814 5.04897 0.674254C4.91414 0.561694 4.74408 0.500025 4.56844 0.5H2.25C2.05109 0.5 1.86032 0.579018 1.71967 0.71967C1.57902 0.860322 1.5 1.05109 1.5 1.25C1.5 1.44891 1.57902 1.63968 1.71967 1.78033C1.86032 1.92098 2.05109 2 2.25 2H3.9375L6.33375 15.1522C6.40434 15.5422 6.57671 15.9067 6.83344 16.2087C6.47911 16.5397 6.22336 16.9623 6.09455 17.4298C5.96575 17.8972 5.96892 18.3912 6.10371 18.8569C6.23851 19.3226 6.49966 19.7419 6.85821 20.0683C7.21676 20.3947 7.6587 20.6154 8.13502 20.7059C8.61134 20.7965 9.10344 20.7533 9.55673 20.5813C10.01 20.4092 10.4068 20.115 10.7031 19.7312C10.9994 19.3474 11.1836 18.889 11.2353 18.407C11.287 17.9249 11.2041 17.4379 10.9959 17H15.2541C15.0863 17.3513 14.9995 17.7357 15 18.125C15 18.6442 15.154 19.1517 15.4424 19.5834C15.7308 20.0151 16.1408 20.3515 16.6205 20.5502C17.1001 20.7489 17.6279 20.8008 18.1371 20.6996C18.6463 20.5983 19.114 20.3483 19.4812 19.9812C19.8483 19.614 20.0983 19.1463 20.1996 18.6371C20.3008 18.1279 20.2489 17.6001 20.0502 17.1205C19.8515 16.6408 19.5151 16.2308 19.0834 15.9424C18.6517 15.654 18.1442 15.5 17.625 15.5H8.54719C8.37155 15.5 8.20149 15.4383 8.06665 15.3257C7.93182 15.2132 7.84077 15.0569 7.80938 14.8841L7.51219 13.25H18.3872C18.9141 13.2499 19.4243 13.0649 19.8288 12.7272C20.2333 12.3896 20.5064 11.9206 20.6006 11.4022L21.7406 5.13406C21.7599 5.02572 21.7551 4.91447 21.7266 4.80818C21.6981 4.7019 21.6466 4.60319 21.5756 4.51906ZM9.75 18.125C9.75 18.3475 9.68402 18.565 9.5604 18.75C9.43679 18.935 9.26109 19.0792 9.05552 19.1644C8.84995 19.2495 8.62375 19.2718 8.40552 19.2284C8.18729 19.185 7.98684 19.0778 7.8295 18.9205C7.67217 18.7632 7.56502 18.5627 7.52162 18.3445C7.47821 18.1262 7.50049 17.9 7.58564 17.6945C7.67078 17.4889 7.81498 17.3132 7.99998 17.1896C8.18499 17.066 8.4025 17 8.625 17C8.92337 17 9.20952 17.1185 9.4205 17.3295C9.63147 17.5405 9.75 17.8266 9.75 18.125ZM18.75 18.125C18.75 18.3475 18.684 18.565 18.5604 18.75C18.4368 18.935 18.2611 19.0792 18.0555 19.1644C17.85 19.2495 17.6238 19.2718 17.4055 19.2284C17.1873 19.185 16.9868 19.0778 16.8295 18.9205C16.6722 18.7632 16.565 18.5627 16.5216 18.3445C16.4782 18.1262 16.5005 17.9 16.5856 17.6945C16.6708 17.4889 16.815 17.3132 17 17.1896C17.185 17.066 17.4025 17 17.625 17C17.9234 17 18.2095 17.1185 18.4205 17.3295C18.6315 17.5405 18.75 17.8266 18.75 18.125ZM19.125 11.1341C19.0935 11.3074 19.0021 11.464 18.8666 11.5766C18.7312 11.6893 18.5605 11.7506 18.3844 11.75H7.23938L6.14906 5.75H20.1009L19.125 11.1341Z"
                        ></path>
                      </svg>
                      <span class="ds-c-utility-nav__text">Cart</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <button class="ds-c-header__menu-button" @click=${this.toggleIsActive}>
                ${this.isActive
                  ? html`<svg
                      class="ds-c-header__menu-button-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M19.0607 4.93934C19.3536 5.23223 19.3536 5.70711 19.0607 6L13.1213 11.9393L19.0607 17.8787C19.3536 18.1716 19.3536 18.6464 19.0607 18.9393C18.7678 19.2322 18.2929 19.2322 18 18.9393L12.0607 13L6.12132 18.9393C5.82843 19.2322 5.35355 19.2322 5.06066 18.9393C4.76777 18.6464 4.76777 18.1716 5.06066 17.8787L11 11.9393L5.06066 6C4.76777 5.70711 4.76777 5.23223 5.06066 4.93934C5.35355 4.64645 5.82843 4.64645 6.12132 4.93934L12.0607 10.8787L18 4.93934C18.2929 4.64645 18.7678 4.64645 19.0607 4.93934Z"
                      />
                    </svg>`
                  : html`<svg
                      class="ds-c-header__menu-button-icon"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21 12C21 12.1989 20.921 12.3897 20.7803 12.5303C20.6397 12.671 20.4489 12.75 20.25 12.75H3.75C3.55109 12.75 3.36032 12.671 3.21967 12.5303C3.07902 12.3897 3 12.1989 3 12C3 11.8011 3.07902 11.6103 3.21967 11.4697C3.36032 11.329 3.55109 11.25 3.75 11.25H20.25C20.4489 11.25 20.6397 11.329 20.7803 11.4697C20.921 11.6103 21 11.8011 21 12ZM3.75 6.75H20.25C20.4489 6.75 20.6397 6.67098 20.7803 6.53033C20.921 6.38968 21 6.19891 21 6C21 5.80109 20.921 5.61032 20.7803 5.46967C20.6397 5.32902 20.4489 5.25 20.25 5.25H3.75C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6C3 6.19891 3.07902 6.38968 3.21967 6.53033C3.36032 6.67098 3.55109 6.75 3.75 6.75ZM20.25 17.25H3.75C3.55109 17.25 3.36032 17.329 3.21967 17.4697C3.07902 17.6103 3 17.8011 3 18C3 18.1989 3.07902 18.3897 3.21967 18.5303C3.36032 18.671 3.55109 18.75 3.75 18.75H20.25C20.4489 18.75 20.6397 18.671 20.7803 18.5303C20.921 18.3897 21 18.1989 21 18C21 17.8011 20.921 17.6103 20.7803 17.4697C20.6397 17.329 20.4489 17.25 20.25 17.25Z"
                      />
                    </svg>`}
                <span class="ds-c-header__menu-button-text ds-u-is-vishidden">Menu</span>
              </button>
            </div>
          </div>
        </header>
        <main>
          <section class="ds-c-section">
            <div class=" ds-c-hero ">
              <img class="ds-c-hero__image" src="${heroImg}" alt="Frost'd Tokens rich and creamy ice cream texture" />

              <div class="ds-c-hero__inner">
                <div class="ds-c-hero__body">
                  <div class="ds-c-layout-container ds-c-hero__body-inner">
                    <h1 class="ds-c-hero__heading">Flavored with real tokens</h1>
                    <p class="ds-c-hero__description"></p>
                    <button type="button" class=" ds-c-button ds-c-button--primary ds-c-hero__button">Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="ds-c-layout-container">
            <section class="ds-c-section ds-c-section--align-center">
              <div class="ds-c-section__header">
                <div class="ds-c-section__header-content">
                  <h2 class="ds-c-section__heading">Token-Powered Treats For Any Palette</h2>
                  <div class="ds-c-section__description">
                    Our collection of frosty flavors delivers 3 tiers of deliciousness straight to your face
                  </div>
                </div>
              </div>
              <div class="ds-c-grid ds-c-grid--3up course-homepage-product-grid">
                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--subtle">
                      <div class="ds-c-product-card__body">
                        <div class="ds-c-badge">
                          <span class="ds-c-badge__text">Best seller</span>
                        </div>
                        <img class="ds-c-product-card__image" src="${mintChocolateChipImg}" alt="Mint chocolate chip ice cream" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Minty McKringle</h3>
                        <p class="ds-c-product-card__description">Delish mint and semi-sweet chocolate chips</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--brand">
                      <div class="ds-c-product-card__body">
                        <div class="ds-c-badge">
                          <span class="ds-c-badge__text">Best seller</span>
                        </div>
                        <img class="ds-c-product-card__image" src="${mokaModeImg}" alt="Chocolate ice cream with chocolate chunks" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Chonky Chocolate</h3>
                        <p class="ds-c-product-card__description">Chonky Chocolate is Chonkyfire</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--subtle">
                      <div class="ds-c-product-card__body">
                        <img class="ds-c-product-card__image" src="${threeTierSundaeImg}" alt="Vanilla ice cream with caramel swirl" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Caramellow</h3>
                        <p class="ds-c-product-card__description">Caramel + Marshmallow = Ridiculousness</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--brand">
                      <div class="ds-c-product-card__body">
                        <img class="ds-c-product-card__image" src="${strawberryImg}" alt="Strawberry ice cream" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Strawberry Slaparoo</h3>
                        <p class="ds-c-product-card__description">Get slapped by berry-licious deliciousness</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--subtle">
                      <div class="ds-c-product-card__body">
                        <img class="ds-c-product-card__image" src="${vanillaImg}" alt="Vanilla ice cream" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Silly Violet Vanilla</h3>
                        <p class="ds-c-product-card__description">So simple, silky, and smooth it's silly</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--brand ">
                      <div class="ds-c-product-card__body">
                        <img class="ds-c-product-card__image" src="${cookieDoughImg}" alt="Cookie dough ice cream" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Cookie Doughboy</h3>
                        <p class="ds-c-product-card__description">You'll gladly “Accept All” of these cookies!</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--subtle">
                      <div class="ds-c-product-card__body">
                        <img class="ds-c-product-card__image" src="${marshmallowImg}" alt="Marshmallow ice cream" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Marshmallow</h3>
                        <p class="ds-c-product-card__description">MarshmallOH MAN THIS IS DELICIOUS</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--brand ">
                      <div class="ds-c-product-card__body">
                        <img class="ds-c-product-card__image" src="${cinnamonImg}" alt="Cinnamon chocolate ice cream" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Cinnamon Chocolate Fun Park</h3>
                        <p class="ds-c-product-card__description">Like a rollercoaster for your taste buds</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ds-c-grid__item">
                  <div class="product-card-wrapper">
                    <div class=" ds-c-product-card ds-c-product-card--subtle">
                      <div class="ds-c-product-card__body">
                        <img class="ds-c-product-card__image" src="${darkChocolateImg}" alt="Dark chocolate and chocolate chunk ice fream" />
                      </div>
                      <div class="ds-c-product-card__footer">
                        <h3 class="ds-c-product-card__heading">Dark Chocolate Cave</h3>
                        <p class="ds-c-product-card__description">Decadent stalactites & creamy stalagmites</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="course-homepage__button-wrapper">
                <button type="button" class="ds-c-button">View our entire collection of flavors</button>
              </div>
            </section>
          </div>
          <div class="ds-c-feature-block">
            <div class="ds-c-layout-container">
              <div class="ds-c-feature-block__inner">
                <div class="ds-c-feature-block__media">
                  <img class="ds-c-feature-block__image" alt="Cones" src="${bootsyImg}" />
                </div>
                <div class="ds-c-feature-block__body">
                  <h3 class="ds-c-feature-block__heading">Introducing Frost'd Dawgs!</h3>
                  <ul class="ds-c-feature-block__list">
                    <li class="ds-c-feature-block__item">
                      <div class="ds-c-feature-block__item-icon">
                        <svg
                          class="ds-c-feature-block__item-image"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M52 24.3425V24C52 18.6957 49.8929 13.6086 46.1421 9.85786C42.3914 6.10714 37.3043 4 32 4C26.6957 4 21.6086 6.10714 17.8579 9.85786C14.1071 13.6086 12 18.6957 12 24V24.3425C10.6651 24.814 9.53994 25.7423 8.82342 26.9632C8.1069 28.1842 7.8452 29.6192 8.08458 31.0146C8.32397 32.4099 9.04902 33.6756 10.1315 34.5879C11.2141 35.5003 12.5843 36.0004 14 36H14.8225L28.5275 59.985C28.8774 60.597 29.3829 61.1057 29.9927 61.4595C30.6025 61.8133 31.295 61.9996 32 61.9996C32.705 61.9996 33.3975 61.8133 34.0073 61.4595C34.6171 61.1057 35.1226 60.597 35.4725 59.985L49.1775 36H50C51.4157 36.0004 52.786 35.5003 53.8685 34.5879C54.951 33.6756 55.6761 32.4099 55.9154 31.0146C56.1548 29.6192 55.8931 28.1842 55.1766 26.9632C54.4601 25.7423 53.3349 24.814 52 24.3425ZM19.4275 36H24.2675L34.42 53.765L32 58L19.4275 36ZM33.6975 36L39.135 45.515L36.7225 49.735L28.875 36H33.6975ZM41.4475 41.485L38.3025 36H44.5725L41.4475 41.485ZM50 32H14C13.4696 32 12.9609 31.7893 12.5858 31.4142C12.2107 31.0391 12 30.5304 12 30C12 29.4696 12.2107 28.9609 12.5858 28.5858C12.9609 28.2107 13.4696 28 14 28C14.5304 28 15.0391 27.7893 15.4142 27.4142C15.7893 27.0391 16 26.5304 16 26V24C16 19.7565 17.6857 15.6869 20.6863 12.6863C23.6869 9.68571 27.7565 8 32 8C36.2435 8 40.3131 9.68571 43.3137 12.6863C46.3143 15.6869 48 19.7565 48 24V26C48 26.5304 48.2107 27.0391 48.5858 27.4142C48.9609 27.7893 49.4696 28 50 28C50.5304 28 51.0392 28.2107 51.4142 28.5858C51.7893 28.9609 52 29.4696 52 30C52 30.5304 51.7893 31.0391 51.4142 31.4142C51.0392 31.7893 50.5304 32 50 32Z"
                          ></path>
                        </svg>
                      </div>
                      <div class="ds-c-feature-block__item-content">
                        <div class="ds-c-feature-block__item-description">
                          <strong>For your health!</strong> Frost'd Dawgs promote healthy bone growth and strong gums for your pup!
                        </div>
                      </div>
                    </li>
                    <li class="ds-c-feature-block__item">
                      <div class="ds-c-feature-block__item-icon">
                        <svg
                          class="ds-c-feature-block__item-image"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M55.92 16.5375L33.92 4.49998C33.3322 4.17519 32.6716 4.00482 32 4.00482C31.3284 4.00482 30.6678 4.17519 30.08 4.49998L8.08 16.5425C7.45172 16.8862 6.92726 17.3924 6.56138 18.008C6.1955 18.6237 6.00163 19.3263 6 20.0425V43.9525C6.00163 44.6687 6.1955 45.3713 6.56138 45.9869C6.92726 46.6026 7.45172 47.1087 8.08 47.4525L30.08 59.495C30.6678 59.8198 31.3284 59.9901 32 59.9901C32.6716 59.9901 33.3322 59.8198 33.92 59.495L55.92 47.4525C56.5483 47.1087 57.0727 46.6026 57.4386 45.9869C57.8045 45.3713 57.9984 44.6687 58 43.9525V20.045C57.9997 19.3275 57.8065 18.6234 57.4405 18.0063C57.0746 17.3892 56.5494 16.8819 55.92 16.5375ZM32 7.99998L52.085 19L44.6425 23.075L24.555 12.075L32 7.99998ZM32 30L11.915 19L20.39 14.36L40.475 25.36L32 30ZM10 22.5L30 33.445V54.8925L10 43.955V22.5ZM54 43.945L34 54.8925V33.455L42 29.0775V38C42 38.5304 42.2107 39.0391 42.5858 39.4142C42.9609 39.7893 43.4696 40 44 40C44.5304 40 45.0391 39.7893 45.4142 39.4142C45.7893 39.0391 46 38.5304 46 38V26.8875L54 22.5V43.9425V43.945Z"
                          ></path>
                        </svg>
                      </div>
                      <div class="ds-c-feature-block__item-content">
                        <div class="ds-c-feature-block__item-description">
                          <strong>Overnight shipping available!</strong> Your dogs are barking for Frost'd Dawgs, so don't make them wait!
                        </div>
                      </div>
                    </li>
                    <li class="ds-c-feature-block__item">
                      <div class="ds-c-feature-block__item-icon">
                        <svg
                          class="ds-c-feature-block__item-image"
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M32 6C26.8577 6 21.8309 7.52487 17.5552 10.3818C13.2795 13.2387 9.94702 17.2994 7.97914 22.0502C6.01127 26.8011 5.49638 32.0288 6.49959 37.0723C7.50281 42.1159 9.97907 46.7486 13.6152 50.3848C17.2514 54.0209 21.8842 56.4972 26.9277 57.5004C31.9712 58.5036 37.1989 57.9887 41.9498 56.0209C46.7007 54.053 50.7613 50.7205 53.6182 46.4448C56.4751 42.1691 58 37.1423 58 32C57.9927 25.1066 55.2511 18.4976 50.3767 13.6233C45.5024 8.74889 38.8934 6.00728 32 6ZM32 54C27.6488 54 23.3953 52.7097 19.7775 50.2923C16.1596 47.8749 13.3398 44.439 11.6747 40.419C10.0095 36.3991 9.57386 31.9756 10.4227 27.708C11.2716 23.4404 13.3669 19.5204 16.4437 16.4437C19.5204 13.3669 23.4404 11.2716 27.708 10.4227C31.9756 9.57385 36.3991 10.0095 40.419 11.6747C44.439 13.3398 47.875 16.1596 50.2923 19.7775C52.7097 23.3953 54 27.6488 54 32C53.9934 37.8327 51.6734 43.4247 47.5491 47.549C43.4247 51.6734 37.8327 53.9934 32 54ZM20 27C20 26.4067 20.176 25.8266 20.5056 25.3333C20.8352 24.8399 21.3038 24.4554 21.852 24.2284C22.4001 24.0013 23.0033 23.9419 23.5853 24.0576C24.1672 24.1734 24.7018 24.4591 25.1213 24.8787C25.5409 25.2982 25.8266 25.8328 25.9424 26.4147C26.0581 26.9967 25.9987 27.5999 25.7717 28.1481C25.5446 28.6962 25.1601 29.1648 24.6667 29.4944C24.1734 29.8241 23.5934 30 23 30C22.2044 30 21.4413 29.6839 20.8787 29.1213C20.3161 28.5587 20 27.7956 20 27ZM44 27C44 27.5933 43.8241 28.1734 43.4944 28.6667C43.1648 29.1601 42.6962 29.5446 42.1481 29.7716C41.5999 29.9987 40.9967 30.0581 40.4147 29.9424C39.8328 29.8266 39.2982 29.5409 38.8787 29.1213C38.4591 28.7018 38.1734 28.1672 38.0577 27.5853C37.9419 27.0033 38.0013 26.4001 38.2284 25.8519C38.4554 25.3038 38.84 24.8352 39.3333 24.5056C39.8266 24.1759 40.4067 24 41 24C41.7957 24 42.5587 24.3161 43.1213 24.8787C43.6839 25.4413 44 26.2044 44 27ZM43.7325 39C41.16 43.4475 36.8825 46 32 46C27.1175 46 22.8425 43.45 20.27 39C20.1253 38.7724 20.0281 38.5178 19.9844 38.2516C19.9406 37.9855 19.9511 37.7132 20.0153 37.4512C20.0794 37.1892 20.1959 36.9429 20.3578 36.7271C20.5196 36.5113 20.7234 36.3305 20.957 36.1955C21.1905 36.0605 21.4489 35.9742 21.7167 35.9416C21.9844 35.9091 22.256 35.9311 22.5151 36.0062C22.7741 36.0814 23.0153 36.2082 23.2241 36.379C23.4329 36.5497 23.605 36.761 23.73 37C25.5975 40.2275 28.5325 42 32 42C35.4675 42 38.4025 40.225 40.2675 37C40.5327 36.5405 40.9696 36.2052 41.4821 36.0678C41.9945 35.9305 42.5405 36.0023 43 36.2675C43.4595 36.5327 43.7948 36.9696 43.9322 37.482C44.0696 37.9945 43.9977 38.5405 43.7325 39Z"
                          ></path>
                        </svg>
                      </div>
                      <div class="ds-c-feature-block__item-content">
                        <div class="ds-c-feature-block__item-description">
                          <strong>Happiness guaranteed!</strong> Both dogs and veterinarians agree Frost'd Dawgs is a delicious cross-species treat!
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <footer class="ds-c-footer ">
            <div class="ds-c-layout-container ">
              <div class="ds-c-footer__inner">
                <div class="ds-c-footer__left">
                  <h2 class="ds-c-footer__heading">It's Like Dessert For Your Inbox</h2>
                  <p class="ds-c-footer__description">Sign up for our email newsletter & get the inside scoop!</p>
                  <form class="ds-c-footer__newsletter">
                    <div class="ds-c-footer__text-field">
                      <div class=" ds-c-text-field ds-c-text-field--hide-label ds-c-text-field--inverted ">
                        <label class="ds-c-text-field__label" for="footer-newsletter">Promo code </label>
                        <div class="ds-c-text-field__body">
                          <input
                            class="ds-c-text-field__input"
                            type="text"
                            id="footer-newsletter"
                            required="true"
                            aria-describedby=""
                            placeholder="Your email address"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="ds-c-footer__button">
                      <button type="button" class=" ds-c-button ds-c-button--primary ">Apply</button>
                    </div>
                  </form>
                </div>
                <div class="ds-c-footer__right">
                  <nav class="ds-c-footer__nav" role="footer navigation">
                    <div class="ds-c-footer__nav-group">
                      <h2 class="ds-c-footer__nav-heading">About</h2>
                      <ul class="ds-c-footer__nav-list">
                        <li class="ds-c-footer__nav-item">
                          <a href="/" class="ds-c-footer__nav-link">Our Frosty Story</a>
                        </li>
                        <li class="ds-c-footer__nav-item">
                          <a href="/" class="ds-c-footer__nav-link">Store Locations</a>
                        </li>
                      </ul>
                    </div>
                    <div class="ds-c-footer__nav-group">
                      <h2 class="ds-c-footer__nav-heading">Help</h2>
                      <ul class="ds-c-footer__nav-list">
                        <li class="ds-c-footer__nav-item">
                          <a href="/" class="ds-c-footer__nav-link">Customer Service</a>
                        </li>
                        <li class="ds-c-footer__nav-item">
                          <a href="/" class="ds-c-footer__nav-link">Shipping Information</a>
                        </li>
                        <li class="ds-c-footer__nav-item">
                          <a href="/" class="ds-c-footer__nav-link">Order Status</a>
                        </li>
                        <li class="ds-c-footer__nav-item">
                          <a href="/" class="ds-c-footer__nav-link">Return policy (let it melt)</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    `;
  }

  createRenderRoot() {
    return this;
  }
}

customElements.define('course-homepage', Homepage);
