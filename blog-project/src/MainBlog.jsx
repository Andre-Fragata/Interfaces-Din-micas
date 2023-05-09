import blog from './BlogStyle.module.css'   

function MainBlog(){
    return(
        <main className={blog.estilo}>
            <h1 className={blog.titulo}>ATIVIDADE REACT</h1>
            <section>
                <article>
                    <h2>Quais são as principais formas de criar um componente em React?</h2>
                    <p>Com função é a forma mais simples, basta criar um função que retorne o conteúdo do componente <br /> Hooks (Functional Component with Hooks): Desde a versão 16.8, o React introduziu os Hooks, que são funções <br /> especiais que permitem usar recursos do React em componentes funcionais, como estado (state), efeito (effect), referência (ref) e outros</p>
                </article>
                <hr className={blog.separador}/>
                <article>
                    <h2>O que são Hooks</h2>
                    <p>Os Hooks são funções que permitem que você use recursos internos do React, como state, context, <br /> refs, efeito (effect), e outros, em um componente funcional. Eles permitem que você divida o código em funções <br /> menores e reutilizáveis, tornando o código mais legível e mais fácil de manter.</p>
                </article>
                <hr className={blog.separador}/>
                <article>
                    <h2>Qual o objetivo dos Hooks?</h2>
                    <p>O objetivo principal dos Hooks é permitir que desenvolvedores usem recursos avançados do React, <br /> como state, ciclo de vida (lifecycle), contexto, efeito (effect), e outros, <br /> em componentes funcionais, sem a necessidade de usar classes. Isso torna o código mais <br /> simples e legível, reduz a quantidade de boilerplate code, e melhora a reutilização de código.</p>
                </article>
                <hr className={blog.separador}/>
                <article>
                    <h2>Descreva a funcionalidade do useState</h2>
                    <p>O useState é um Hook do React que permite adicionar state a um componente <br /> funcional. Ele é usado para armazenar valores que podem mudar ao longo do tempo <br /> e que afetam a renderização do componente.</p>
                </article>
                <hr className={blog.separador}/>
                <article>
                    <h2>Quando devemos utilizar os estados no React</h2>
                    <p>Os estados (states) no React devem ser usados quando um componente <br /> precisa armazenar e exibir informações que podem mudar <br /> ao longo do tempo e afetar a renderização do componente.</p>
                </article>
                <hr className={blog.separador}/>
            </section>
        </main>
    )
}

export default MainBlog