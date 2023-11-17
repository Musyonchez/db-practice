import { sql } from "@vercel/postgres";

export default async function Cart({ params }) {
  const { rows } = await sql`SELECT * FROM CARTS WHERE user_id=${params.user}`.run({ POSTGRES_URL: process.env.POSTGRES_URL });
  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}