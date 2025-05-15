const User = require('../models/user');
const sendUserCreatedMessage = require('../kafka/producer'); // Assure-toi du bon chemin

// 🔍 Obtenir tous les utilisateurs
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
};

// 🔍 Obtenir un utilisateur par ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Utilisateur non trouvé' });
  }
};

// ➕ Créer un utilisateur et envoyer à Kafka
const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();

    await sendUserCreatedMessage(newUser); // 🔁 Kafka

    res.status(201).json(newUser);
  } catch (err) {
    console.error("Erreur serveur :", err);
    res.status(500).json({ error: 'Erreur lors de la création de l’utilisateur' });
  }
};

// 📝 Modifier un utilisateur
const updateUser = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la mise à jour' });
  }
};

// ❌ Supprimer un utilisateur
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la suppression' });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
