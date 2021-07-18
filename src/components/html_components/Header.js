// Header
// This contains the menu.

export default function HTMLContent() {
    return (
        <header class="c-header " data-header="data-header">
            <button class="c-header__menu-btn" data-btn="menu" aria-label="Close" aria-haspopup="true" aria-expanded="true">
                <span class="c-header__menu-icon">
                    <span></span>
                </span>
            </button>
            <div data-menu-wrapper="data-menu-wrapper" class="js-menu is-visible">
                <nav class="c-header__nav">
                    <ul class="c-header__list">
                        <li class="c-header__item">
                            <a class="c-header__link" href="/" data-home-link="data-home-link">Home</a>
                        </li>

                        <li class="c-header__item">
                            <a class="c-header__link" href="#about" data-menu-link="">About me</a>
                        </li>

                        <li class="c-header__item">
                            <a class="c-header__link" href="#writing" data-menu-link="">Writing</a>
                        </li>

                        <li class="c-header__item">
                            <a class="c-header__link" href="#speaking" data-menu-link="">Speaking</a>
                        </li>

                        <li class="c-header__item">
                            <a class="c-header__link" href="#contact" data-menu-link="">Get in touch</a>
                        </li>


                    </ul>
                </nav>
            </div>
        </header>
    )
}