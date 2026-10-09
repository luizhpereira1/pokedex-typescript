import { buscarPokemon } from "./services/PokeApiService";
import { CatalogoPokemon } from "./services/CatalogoPokemon";

async function main(): Promise<void> {
    const catalogo = new CatalogoPokemon();

    console.log("--- BUSCANDO POKÉMON ---");

    const pikachu = await buscarPokemon("pikachu");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }

    const charmander = await buscarPokemon("charmander");
    if (charmander !== null) {
        catalogo.adicionar(charmander);
    }

    const bulbasaur = await buscarPokemon("bulbasaur");
    if (bulbasaur !== null) {
        catalogo.adicionar(bulbasaur);
    }

    console.log("\n--- TESTANDO DUPLICIDADE ---");
    if (pikachu !== null) {
        catalogo.adicionar(pikachu);
    }

    console.log("\n--- TESTANDO POKÉMON INVÁLIDO ---");
    await buscarPokemon("pokemon-inexistente-123");

    console.log("\n--- CATÁLOGO ---");
    catalogo.listar();

    console.log("\n--- REMOVENDO PIKACHU ---");
    catalogo.remover(25);

    console.log("\n--- CATÁLOGO ATUALIZADO ---");
    catalogo.listar();
}

main().catch(console.error);