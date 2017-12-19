import Link from './Link'

export default () => (
    <header>
        <section>
            <h1>Logo</h1>  
        </section>
        <nav>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
        </nav>
        <style jsx>{`
            header {
                display: flex;
                justify-content: space-between;
                align-items: center
            }
        `}</style>
    </header>
)