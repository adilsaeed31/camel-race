import React, { Component } from 'react'
import './App.scss'
import bulmaAccordion from 'bulma-extensions/bulma-accordion/dist/js/bulma-accordion.min.js'

class App extends Component {
	componentDidMount() {
		bulmaAccordion.attach()
	}

	render() {
		return (
			<div className="camel-container is-fullheight">
				<article className="camel-header">
					<section className="columns is-mobile is-vcentered">
						<div className="column is-3 has-text-left">
							<img src="logo.png" alt="Company Logo" />
						</div>
						<div className="column is-6 has-text-centered camel-font-3">
							بيرق أبناء القبائل
						</div>
						<div className="column is-2 has-text-right camel-right-padding-0">
							<i className="fas fa-2x fa-bars has-text-black camel-burger" />
						</div>
					</section>
				</article>

				<section className="section camel-note has-text-white has-text-centered">
					ملاحظه: لا تعد النتائج المذكوره أدناه نهائية وتعتمد بشكل رئيسي
				</section>

				<article className="section camel-body has-text-white has-text-centered">
					<section className="section camel-buttons">
						<header className="columns is-mobile is-vcentered">
							<div className="column is-2">
								<span className="is-two navbar-burger burger has-text-white">
									<span className="span-hr-line" />
									<span className="span-hr-line center-thick" />
									<span className="span-hr-line span-hr-last" />
								</span>
							</div>
							<div className="column is-2">
								<button className="button camel-btn has-text-white">
									أرشيف
								</button>
							</div>
							<div className="column is-4">&nbsp;</div>
							<div className="column is-2">
								<i className="fas fa-plus-square" />
							</div>
							<div className="column is-2">
								<i className="fas fa-arrow-right" />
							</div>
						</header>
					</section>

					<section className="section camel-listing">
						<header className="camel-headings">
							<div className="columns is-mobile">
								<div className="column is-3">النقاط</div>
								<div className="column is-2">الرموز</div>
								<div className="column is-3">الاسم</div>
								<div className="column is-2">المركز</div>
								<div className="column is-2">&nbsp;</div>
							</div>
						</header>

						<section className="camel-table">
							<header className="columns is-mobile is-marginless">
								<div className="column is-3">40</div>
								<div className="column is-2">7</div>
								<div className="column is-3">محمد راشد بن غدير الكتبي</div>
								<div className="column is-2">1</div>
								<div className="column is-2">&nbsp;</div>
							</header>

							<section className="camel-table-body is-top-border">
								<header className="columns is-mobile is-marginless">
									<div className="column is-2 has-text-weight-bold">
										حول وزمول
									</div>
									<div className="column is-2 has-text-weight-bold">ثنايا </div>
									<div className="column is-2 has-text-weight-bold">إيذاع</div>
									<div className="column is-2 has-text-weight-bold">لقايا</div>
									<div className="column is-2 has-text-weight-bold">حقاقه</div>
									<div className="column is-2">السن</div>
								</header>

								<div className="columns is-mobile is-marginless is-top-border-thick">
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2">المركز الأول</div>
								</div>

								<div className="columns is-mobile is-marginless is-top-border">
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2">المركز الثاني</div>
								</div>

								<div className="columns is-mobile is-marginless is-top-border">
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2">المركز الثالث</div>
								</div>
							</section>

							<footer className="accordions camel-accordion">
								<article className="accordion">
									<div className="accordion-header toggle">
										<p className="accordion-title">مهرجان ولي عهد دبي</p>
										<p>12</p>
										<i
											className="fas fa-chevron-down toggle camel-chevron-font-margin"
											aria-label="toggle"
										/>
									</div>
									<div className="accordion-body">
										<div className="accordion-content">
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													التاريخ
												</div>
												<div className="column has-text-weight-bold">الشوط</div>
												<div className="column has-text-weight-bold">
													المركز
												</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">2019-01-24</div>
												<div className="column">1</div>
												<div className="column">2</div>
											</div>
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													النقاط
												</div>
												<div className="column has-text-weight-bold">
													التوقيت
												</div>
												<div className="column has-text-weight-bold">السن</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">1</div>
												<div className="column">2</div>
												<div className="column">3</div>
											</div>
										</div>
									</div>
								</article>
								<article className="accordion">
									<div className="accordion-header toggle">
										<p className="accordion-title">
											مهرجان الشيخ محمد بن زايد التلة
										</p>
										<p>2</p>
										<i
											className="fas fa-chevron-down toggle camel-chevron-font-margin"
											aria-label="toggle"
										/>
									</div>
									<div className="accordion-body">
										<div className="accordion-content">
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													التاريخ
												</div>
												<div className="column has-text-weight-bold">الشوط</div>
												<div className="column has-text-weight-bold">
													المركز
												</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">2019-01-24</div>
												<div className="column">1</div>
												<div className="column">2</div>
											</div>
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													النقاط
												</div>
												<div className="column has-text-weight-bold">
													التوقيت
												</div>
												<div className="column has-text-weight-bold">السن</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">1</div>
												<div className="column">2</div>
												<div className="column">3</div>
											</div>
										</div>
									</div>
								</article>
								<article className="accordion">
									<div className="accordion-header toggle">
										<p className="accordion-title">جائزة زايد الكبرى</p>
										<p>6</p>
										<i
											className="fas fa-chevron-down toggle camel-chevron-font-margin"
											aria-label="toggle"
										/>
									</div>
									<div className="accordion-body">
										<div className="accordion-content">
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													التاريخ
												</div>
												<div className="column has-text-weight-bold">الشوط</div>
												<div className="column has-text-weight-bold">
													المركز
												</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">2019-01-24</div>
												<div className="column">1</div>
												<div className="column">2</div>
											</div>
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													النقاط
												</div>
												<div className="column has-text-weight-bold">
													التوقيت
												</div>
												<div className="column has-text-weight-bold">السن</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">1</div>
												<div className="column">2</div>
												<div className="column">3</div>
											</div>
										</div>
									</div>
								</article>
							</footer>
						</section>

						<section className="camel-table">
							<header className="columns is-mobile is-marginless">
								<div className="column is-3">40</div>
								<div className="column is-2">7</div>
								<div className="column is-3">محمد راشد بن غدير الكتبي</div>
								<div className="column is-2">1</div>
								<div className="column is-2">&nbsp;</div>
							</header>

							<section className="camel-table-body is-top-border">
								<header className="columns is-mobile is-marginless">
									<div className="column is-2 has-text-weight-bold">
										حول وزمول
									</div>
									<div className="column is-2 has-text-weight-bold">ثنايا </div>
									<div className="column is-2 has-text-weight-bold">إيذاع</div>
									<div className="column is-2 has-text-weight-bold">لقايا</div>
									<div className="column is-2 has-text-weight-bold">حقاقه</div>
									<div className="column is-2">السن</div>
								</header>

								<div className="columns is-mobile is-marginless is-top-border-thick">
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2">المركز الأول</div>
								</div>

								<div className="columns is-mobile is-marginless is-top-border">
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2">المركز الثاني</div>
								</div>

								<div className="columns is-mobile is-marginless is-top-border">
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">0</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2 has-text-weight-bold">1</div>
									<div className="column is-2">المركز الثالث</div>
								</div>
							</section>

							<footer className="accordions camel-accordion">
								<article className="accordion">
									<div className="accordion-header toggle">
										<p className="accordion-title">مهرجان ولي عهد دبي</p>
										<p>12</p>
										<i
											className="fas fa-chevron-down toggle camel-chevron-font-margin"
											aria-label="toggle"
										/>
									</div>
									<div className="accordion-body">
										<div className="accordion-content">
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													التاريخ
												</div>
												<div className="column has-text-weight-bold">الشوط</div>
												<div className="column has-text-weight-bold">
													المركز
												</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">2019-01-24</div>
												<div className="column">1</div>
												<div className="column">2</div>
											</div>
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													النقاط
												</div>
												<div className="column has-text-weight-bold">
													التوقيت
												</div>
												<div className="column has-text-weight-bold">السن</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">1</div>
												<div className="column">2</div>
												<div className="column">3</div>
											</div>
										</div>
									</div>
								</article>
								<article className="accordion">
									<div className="accordion-header toggle">
										<p className="accordion-title">
											مهرجان الشيخ محمد بن زايد التلة
										</p>
										<p>2</p>
										<i
											className="fas fa-chevron-down toggle camel-chevron-font-margin"
											aria-label="toggle"
										/>
									</div>
									<div className="accordion-body">
										<div className="accordion-content">
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													التاريخ
												</div>
												<div className="column has-text-weight-bold">الشوط</div>
												<div className="column has-text-weight-bold">
													المركز
												</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">2019-01-24</div>
												<div className="column">1</div>
												<div className="column">2</div>
											</div>
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													النقاط
												</div>
												<div className="column has-text-weight-bold">
													التوقيت
												</div>
												<div className="column has-text-weight-bold">السن</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">1</div>
												<div className="column">2</div>
												<div className="column">3</div>
											</div>
										</div>
									</div>
								</article>
								<article className="accordion">
									<div className="accordion-header toggle">
										<p className="accordion-title">جائزة زايد الكبرى</p>
										<p>6</p>
										<i
											className="fas fa-chevron-down toggle camel-chevron-font-margin"
											aria-label="toggle"
										/>
									</div>
									<div className="accordion-body">
										<div className="accordion-content">
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													التاريخ
												</div>
												<div className="column has-text-weight-bold">الشوط</div>
												<div className="column has-text-weight-bold">
													المركز
												</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">2019-01-24</div>
												<div className="column">1</div>
												<div className="column">2</div>
											</div>
											<div className="columns is-mobile">
												<div className="column has-text-weight-bold">
													النقاط
												</div>
												<div className="column has-text-weight-bold">
													التوقيت
												</div>
												<div className="column has-text-weight-bold">السن</div>
											</div>
											<div className="columns is-mobile">
												<div className="column">1</div>
												<div className="column">2</div>
												<div className="column">3</div>
											</div>
										</div>
									</div>
								</article>
							</footer>
						</section>

						<div className="is-clear" />
					</section>
				</article>
			</div>
		)
	}
}

export default App
