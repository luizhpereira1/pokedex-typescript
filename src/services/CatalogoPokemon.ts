import { PokemonResumo } from "../models/Pokemon";

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        const jaExiste = this.pokemons.some((item) => {
            return item.id === pokemon.id;
        });

        if (jaExiste) {
            console.log("Pokémon já cadastrado");
            return;
        }

        this.pokemons.push(pokemon);
        console.log(`${pokemon.nome} adicionado ao catálogo`);
    }

    listar(): void {
        if (this.pokemons.length === 0) {
            console.log("Catálogo vazio");
            return;
        }

        this.pokemons.forEach((pokemon) => {
            console.log(
                `#${pokemon.id} - ${pokemon.nome} - ${pokemon.tipos.join(", ")}`
            );
        });
    }

    remover(id: number): void {
        const existe = this.pokemons.some((pokemon) => {
            return pokemon.id === id;
        });

        if (!existe) {
            console.log("Pokémon não encontrado no catálogo");
            return;
        }

        this.pokemons = this.pokemons.filter((pokemon) => {
            return pokemon.id !== id;
        });

        console.log("Pokémon removido");
    }
}