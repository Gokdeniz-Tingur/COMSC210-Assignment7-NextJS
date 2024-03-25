import Link from "next/link";


const About = () => {
    return(<html lang="en">
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
                    <li  class="current"><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                </ul>
            </nav>
        </div>
    </header>
   

    <section id="newsletter">
        <div class="container">
            <h1>Subscribe to Our Newsletter</h1>
            <form>
                <input type="email" placeholder="123@abcd.com"></input>
                <button type="sbmit" class="button_1">Subscribe</button>
            </form>
        </div>

    </section>

    <section id="main">
        <div class="container">
            <article id="main-col">
                <h1 class="page-title">Detailed About Me and Resume</h1>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas nisi eligendi excepturi impedit enim atque ut eveniet. Ut quasi amet quaerat, veritatis voluptas ex, id qui quidem incidunt illum porro. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aliquam, repellat fugit veritatis aperiam quam est et maxime eius distinctio vitae adipisci eos consectetur assumenda excepturi delectus, minus consequatur at.
                </p>  
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ullam libero ea rem natus aliquam voluptatum odio est non dolores possimus ad, sit voluptas modi excepturi. Libero, minus officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, officiis ipsum. Maxime quod at quasi iste modi vitae minus corrupti cumque sit culpa voluptatem architecto ex ratione voluptatum, saepe nihil!
                </p>
            </article>

            <aside id="sidebar">
                <div class="dark">
                <h3>What I'm Working on Right Now</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, modi iure veritatis sit quas dolores eos laudantium reprehenderit sed, eaque rem veniam excepturi officiis dignissimos blanditiis ullam aspernatur, ab aut!</p>
                </div>
            </aside>
        </div>
    </section>
    <footer>
        <p>Gokdeniz Tingur &copy; 2024</p>
    </footer>
</body>
</html> )
}

export default About