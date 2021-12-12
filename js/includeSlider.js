let sliderWrapper = document.querySelector('.section_slider');
sliderWrapper.insertAdjacentHTML("afterbegin", `
		 <h3 class="block_title ">Смотреть ещё</h3>
            <div class="slides_wrapper">
                <div class="controls">
                    <button class="prev_button">
                        <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.5 1.5L1.85355 16.1464C1.65829 16.3417 1.65829 16.6583 1.85355 16.8536L16.5 31.5"
                                stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </button>
                    <button class="next_button">
                        <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.5L16.1464 16.1464C16.3417 16.3417 16.3417 16.6583 16.1464 16.8536L1.5 31.5"
                                stroke="white" stroke-width="3" stroke-linecap="round" />
                        </svg>
                    </button>
                </div>

                <div class="slider">
                    <div class="slide">
                        <h4 class="slide_title">Sony Pictures Animation</h4>
                        <a href="next.html">
                            <img class="slide_img dynamic_link" src="./img/Transylvania.jpg" alt="постер"
                                data-source="Transylvania">
                        </a>
                    </div>

                    <div class="slide">
                        <h4 class="slide_title">Warner Bros. Cartoons</h4>
                        <a href="https://characterdesignreferences.com/art-of-animation-6/art-of-the-iron-giant-part-1">
                            <img class="slide_img dynamic_link" src="./img/gigant.png" alt="постер"
                                data-source="Giant">
                        </a>
                    </div>

                    <div class="slide">
                        <h4 class="slide_title">Bly sky studios</h4>
                        <a href="next.html">
                            <img class="slide_img dynamic_link" src="./img/blue sky.png" alt="постер" data-source="Ferdinand">
                        </a>
                    </div>

                    <div class="slide">
                        <h4 class="slide_title">Illumination</h4>
                        <a href="next.html">
                            <img class="slide_img dynamic_link" src="./img/Me.jpg" alt="постер" data-source="Me">
                        </a>
                    </div>
                </div>
            </div>
`);