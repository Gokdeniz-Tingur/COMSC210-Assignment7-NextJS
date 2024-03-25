import Link from "next/link";


const Services = () => {
    return (<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    
        <meta name="author" content="Gokdeniz Tingur"/>
        <title>Gokdeniz Tingur | Home</title>
    </head>
    <body>
        <header>
            <div class="container"> 
                <div id="branding">
                    <h1>Gokdeniz Tingur</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li  class="current"><Link href="/services">Services</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
       
    
        <section id="newsletter">
            <div class="container">
                <h1>Subscribe to Our Newsletter</h1>
                <form>
                    <input type="email" placeholder="123@abcd.com"/>
                    <button type="sbmit" class="button_1">Subscribe</button>
                </form>
            </div>
    
        </section>
    
        <section id="main">
            <div class="container">
                <article id="main-col">
                    <h1 class="page-title">Services</h1>
                    <ul id="services">
                        <li>
                            <h3>Website Design</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste iusto voluptatem quis deleniti illo, voluptate nostrum consectetur inventore esse nesciunt, eius dolorem culpa, veritatis expedita animi. Harum, quasi nisi!</p>
                            <p>Pricing: $1,000 - $3,000</p>
                        </li>
                        <li>
                            <h3>Website Maintenance</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste iusto voluptatem quis deleniti illo, voluptate nostrum consectetur inventore esse nesciunt, eius dolorem culpa, veritatis expedita animi. Harum, quasi nisi!</p>
                            <p>Pricing: $1,000 - $3,000</p>
                        </li>
                        <li>
                            <h3>Website Hosting</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod iste iusto voluptatem quis deleniti illo, voluptate nostrum consectetur inventore esse nesciunt, eius dolorem culpa, veritatis expedita animi. Harum, quasi nisi!</p>
                            <p>Pricing: $1,000 - $3,000</p>
                        </li>
                    </ul>
                </article>
    
                <aside id="sidebar">
                    <div class="dark">
                    <h3>Get A Quote</h3>
                    <form class="quote">
                        <div>
                            <label>Name</label><br/>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div>
                            <label>Email</label><br/>
                            <input type="email" placeholder="Email Address"/>
                        </div>
                        <div>
                            <label>Message</label><br/>
                            <textarea placeholder="Message..."></textarea>
                        </div>
                        <button class="button_1" type="submit">Send</button>
                    </form>
    
                    </div>
                </aside>
            </div>
        </section>
        <footer>
            <p>Gokdeniz Tingur &copy; 2024</p>
        </footer>
    </body>
    </html>)

}

export default Services