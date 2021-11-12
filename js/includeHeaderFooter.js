let includedFooter = document.querySelector('footer'); //находим тег на странице
//добавляем информацию в тег
includedFooter.insertAdjacentHTML("afterbegin", `
<div class="footer_block container">
	<div class="foot_wrapper">
	<div class="text">
	<p class="mail"><a href="mailto:nai200315@gmail.com">conceptrary@gmail.com</a></p>
	<div class="author_info">
					<?xml version="1.0" encoding="UTF-8"?>
					<?xml-stylesheet type="text/xsl" href="xml/author_table.xsl"?>
					<information>
						<author>
							<name>Ничипорчик Анастасия</name>
							<specialty>ДЭиВИ</specialty>
							<university>БГТУ</university>
							<year>2021</year>
						</author>
					</information>
	</div>
	</div>
	<a href="./index.html" class="logo">
		<picture>
			<source srcset="svg/only_black_logo.svg" media="(max-width: 550px)">
			<img class="logo_svg" src="svg/black_logo.svg" alt="логотип сайта" title="на главную">
		</picture>
	</a>
	</div>
	<div class="foot_bar">

					<ul class="menu">
					<li class="menu_item">
							<p class="menu_link">
								Студии
							</p>

						 <ul class="submenu">
        <li class="submenu_item"><a class="submenu_link" href="#">Дисней</a></li>
        <li class="submenu_item"><a class="submenu_link" href="#">Пиксар</a></li>
		<li class="submenu_item"><a class="submenu_link" href="#">Дримворкс</a></li>
        <li class="submenu_item"><a class="submenu_link" href="#">Блю Скай</a></li>
      </ul>


						</li>
						<div class="foot_wrapper">
						<li class="menu_item " id="about">
							<a href="#" class="menu_link">
								О&nbsp;проекте <!-- неразрывный пробел -->
							</a>
						</li>
						
						<li class="menu_item ">
							<a href="#" class="menu_link">
								Галерея
							</a>
						</li>
						<li class="menu_item">
							<a href="#" class="menu_link">
								Вопросы?
							</a>
						</li>
						</div>
					</ul>
	</div>
</div>
	`);

let includedHeader = document.querySelector('header');
includedHeader.insertAdjacentHTML("afterbegin", `
<div class="navbar container">
			<a href="./index.html" class="logo">
				<picture>
					<source srcset="svg/only_black_logo.svg" media="(max-width: 370px)">
					<img class="logo_svg" src="svg/black_logo.svg" alt="логотип сайта" title="на главную">
				</picture>
			</a>

			<div class="navbar_panel">
				<button class="close_menu">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M2 2L22 22" stroke="black" stroke-width="2" stroke-linecap="round" />
						<path d="M22 2L2 22" stroke="black" stroke-width="2" stroke-linecap="round" />
					</svg>
				</button>

				<nav class="navbar_menu">

					<ul class="menu">
						<li class="menu_item" id="about">
							<a href="#" class="menu_link">
								О&nbsp;проекте <!-- неразрывный пробел -->
							</a>
						</li>
						<li class="menu_item" id="studio">
							<p class="menu_link">
								Студии
								<svg class="show_submenu" width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M1 7L8 1L15 7" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
								</svg>
							</p>
							
						 <ul class="submenu">
        <li class="submenu_item"><a class="submenu_link" href="#">Дисней</a></li>
        <li class="submenu_item"><a class="submenu_link" href="#">Пиксар</a></li>
		<li class="submenu_item"><a class="submenu_link" href="#">Дримворкс</a></li>
        <li class="submenu_item"><a class="submenu_link" href="#">Блю Скай</a></li>
      </ul>


						</li>
						<li class="menu_item">
							<a href="#" class="menu_link">
								Галерея
							</a>
						</li>
						<li class="menu_item">
							<a href="#" class="menu_link">
								Вопросы?
							</a>
						</li>
					</ul>
				</nav>

				

			</div>
			<button class="menu_button">
				<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M0.937476 9.37501H29.0624C29.58 9.37501 29.9999 8.95498 29.9999 8.43754C29.9999 7.92002 29.5799 7.50006 29.0624 7.50006H0.937476C0.419955 7.50006 0 7.92009 0 8.43754C0 8.95498 0.420033 9.37501 0.937476 9.37501Z"
						fill="black" />
					<path
						d="M29.0624 14.0626H0.937476C0.419955 14.0626 0 14.4826 0 15C0 15.5175 0.420033 15.9375 0.937476 15.9375H29.0624C29.58 15.9375 29.9999 15.5175 29.9999 15C29.9999 14.4826 29.58 14.0626 29.0624 14.0626Z"
						fill="black" />
					<path
						d="M29.0625 20.625H10.3125C9.79495 20.625 9.375 21.0451 9.375 21.5625C9.375 22.08 9.79503 22.5 10.3125 22.5H29.0625C29.58 22.5 29.9999 22.0799 29.9999 21.5625C30 21.045 29.58 20.625 29.0625 20.625Z"
						fill="black" />
				</svg>

			</button>
		</div>`);


let modalWrapper = document.querySelector('.modal_wrapper');
modalWrapper.insertAdjacentHTML("afterbegin", `
		<div class="modal_window ">
		<button class="modal_close_button">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M2 2L22 22" stroke="black" stroke-width="2" stroke-linecap="round" />
				<path d="M22 2L2 22" stroke="black" stroke-width="2" stroke-linecap="round" />
			</svg>
		</button>
		<h2 class="modal_title"><span>Conceptrary</span> <br>сборник<br>концептов</h2>
			<div class="modal_block">
				<h3 class="modal_subtitle">concept&nbsp;– идея + library&nbsp;– библиотека</h3>
				<p>Онлайн-сборник концептуальных изображений персонажей и&nbsp;окружения из самых разных мульт-вселенных</p>

				<p>Это в первую очередь курсовой проект студентки БГТУ. Сам сайт несёт развлекательно-познавательный характер и&nbsp;не имеет
				своей целью оскорбить чьи-либо чувства или использовать чужой труд в&nbsp;коммерческих целях. Все права на изображения принадлежат их правообладателям</p>
			</div>
	</div>
`);
