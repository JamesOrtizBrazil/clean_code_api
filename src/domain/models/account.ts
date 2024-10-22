export interface AccountModel {
    id: string
    name: string
    email: string
    password: string
    accessToken?: string //eu só consegui fazer colocando o accessToken no model, mas não sei se é a melhor forma
}