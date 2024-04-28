import {db,Author, Comment } from 'astro:db';

// Fonction de seed
export default async function seed() {
  try {
    // Insérer des auteurs factices
    const author1 = await db.insert(Author).values({name: 'John Doe' }).execute();
    const author2 = await db.insert(Author).values({ id:2,name: 'Jane Smith' }).execute();

    // Insérer des commentaires factices
    await db.insert(Comment).values([
      { body: 'Ceci est un commentaire.', authorId: 1, likes: 5, flagged: false, published: new Date(), metadata: { category: 'general' } },
      { body: 'Un autre commentaire ici.', authorId: 2, likes: 3, flagged: true, published: new Date(), metadata: { category: 'important' } },
    ]).execute();

    console.log("Seed terminé avec succès.");
  } catch (error) {
    console.error("Erreur lors du seed:", error);
  }
}
