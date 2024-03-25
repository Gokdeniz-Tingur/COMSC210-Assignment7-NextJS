import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
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
                      <li class="current"><Link href="/">Home</Link></li>
                      <li><Link href="/about">About</Link></li>
                      <li><Link href="/services">Services</Link></li>
                  </ul>
              </nav>
          </div>
      </header>
      <section id="showcase">
          <div class="container">
              <div>
              <h1>Affordable Professional Web Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maiores labore possimus eveniet magni unde, asperiores doloribus vero velit architecto dolores, dolorem blanditiis, quas consectetur illo beatae itaque vitae accusamus!</p>
              <h1>About Me</h1>
              </div>
              <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum maiores labore possimus eveniet magni unde, asperiores doloribus vero velit architecto dolores, dolorem blanditiis, quas consectetur illo beatae itaque vitae accusamus!</p>
              </div>
          </div>
          
      </section>
  
      <section id="newsletter">
          <div class="container">
              <h1>Subscribe to Our Newsletter</h1>
              <form>
                  <input type="email" placeholder="123@abcd.com"/>
                  <button type="sbmit" class="button_1">Subscribe</button>
              </form>
          </div>
  
      </section>
  
      <section id="boxes">
          <div class="container">
              
              <div class="box">
                  <img src="/html-1.svg"/>
                  <h3>HTML5 Markup</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error exercitationem impedit expedita, totam quasi illo cumque, reiciendis, harum vero quibusdam. Dolorum aspernatur illum est saepe consectetur nobis accusamus eius?</p>
              </div>
              
              <div class="box">
                  <img src="/css-3.svg"/>
                  <h3>CSS3 Styling</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error exercitationem impedit expedita, totam quasi illo cumque, reiciendis, harum vero quibusdam. Dolorum aspernatur illum est saepe consectetur nobis accusamus eius?</p>
              </div>
              <div class="box">
                  <img id="graphic-design"src="/graphic-design-icon.svg"/>
                  <h3>Graphic Design</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti error exercitationem impedit expedita, totam quasi illo cumque, reiciendis, harum vero quibusdam. Dolorum aspernatur illum est saepe consectetur nobis accusamus eius?</p>
              </div>
          </div>
      </section>
      <footer>
          <p>Gokdeniz Tingur &copy; 2024</p>
      </footer>
  </body>
  </html>);

};

export default HomePage;