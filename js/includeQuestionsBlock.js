let questionsWrapper = document.querySelector('.questions_block');
questionsWrapper.insertAdjacentHTML("afterbegin", `
		 <a href="questions.html">
                <button class="next_button">
                    <svg width="18" height="33" viewBox="0 0 18 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.5L16.1464 16.1464C16.3417 16.3417 16.3417 16.6583 16.1464 16.8536L1.5 31.5"
                            stroke="white" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </button>

                <div class="container">
                    <h3 class="block_title">Остались вопросы?</h3>
                </div>
            </a>
`);