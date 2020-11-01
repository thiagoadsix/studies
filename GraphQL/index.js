const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID
        name: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Query {
        ola: String
        horaAtual: Date
        usuarioLogado: Usuario
    }
`;

const resolvers = {
    Query: {
        ola() {
            return 'Mundo!'
        },
        horaAtual() {
            return new Date
        },
        usuarioLogado() {
            return {
                id: 1,
                name: 'Thiago Andrade Silva',
                email: 'thiago@email.com',
                idade: 20,
                salario: 3000.00,
                vip: true
            }
        }
    }
};

const server =  new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({ url }) => {
    console.log(`Working on ${url}`)
});
