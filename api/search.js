export default async function handler(req, res) {
  const { q } = req.query;

  if (!q) {
    return res.status(400).json({ error: 'Missing search query ?q=' });
  }

  const url = `https://entreprise.data.gouv.fr/api/rna/v1/full_text/${encodeURIComponent(q)}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erreur serveur distant', details: error.message });
  }
}
