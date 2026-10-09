import {
    PokemonApiResponse,
    PokemonResumo
} from "../models/Pokemon";

export async function buscarPokemon(
    nomeOuId: string
): Promise<PokemonResumo | null> {
    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(nomeOuId)}`
        );

        if (!resposta.ok) {
            console.log("Pokémon não encontrado");
            return null;
        }

        const dados = await resposta.json() as PokemonApiResponse;

        const pokemon: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name),
            altura: dados.height,
            peso: dados.weight
        };

        return pokemon;
    } catch (erro) {
        console.log("Erro ao buscar Pokémon:", erro);
        return null;
    }
}