const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {type: String, required: [true, 'Le prénom est obligatoire'], trim: true,  },
    lastName: { type: String, required: [true, 'Le nom est obligatoire'], trim: true,  },
    email: { type: String,
      required: [true, 'L\'email est obligatoire'],unique: true, trim: true,
      lowercase: true, match: [/^.+@.+\..+$/, 'Veuillez saisir une adresse email valide'], },
    password: { type: String, required: [true, 'Le mot de passe est obligatoire'],},
    phone: {type: String, trim: true,},
    avatar: { type: String },
    status: { type: Boolean, default: true, required: true,},
    lastLoginAt: { type: Date,},
    createdAt: {
      type: Date, default: Date.now,required: true, },
    updatedAt: { type: Date, default: Date.now, required: true,},
    // Type d'utilisateur (discriminant)
    userType: {
      type: String,
      enum: {
        values: ['Student', 'Teacher', 'Guardian', 'Administrator'],
        message: 'Le type d\'utilisateur doit être parmi Student, Teacher, Guardian, Administrator',
      },
      required: [true, 'Le type d\'utilisateur est obligatoire'],
    },
    // Rôles (pour une éventuelle gestion fine des permissions)
    roleIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
      },
    ],
    // --- Champs spécifiques aux étudiants ---
    registrationNumber: {
      type: String,
      unique: true,
      sparse: true, // permet plusieurs null sans violer l'unicité
      trim: true,
    },
    birthDate: Date,
    gender: {
      type: String,
      enum: ['male', 'female'],
      // null est accepté via la validation personnalisée ci-dessous
    },
    address: String,
    admissionDate: Date,
    currentClassId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Class',
    },
    // --- Champs spécifiques aux enseignants ---
    speciality: String,
    qualification: String,
    // --- Champs spécifiques aux tuteurs ---
    relationship: {
      type: String,
      enum: ['FATHER', 'MOTHER', 'BROTHER', 'SISTER', 'GRANDFATHER', 'GRANDMOTHER', 'TUTOR', 'OTHER'],
    },
    profession: String,
    // --- Champs spécifiques aux administrateurs ---
    department: String,
    position: {
      type: String,
      enum: ['Director', 'Secretary', 'FinanceOfficer', 'MedicalStaff', 'ITSupport'],
    },
  },
  {
    timestamps: true, // gère automatiquement createdAt et updatedAt
    
  }
);



// Middleware pre-save pour hasher le mot de passe (exemple avec bcrypt)
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const bcrypt = require('bcrypt');
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Méthode pour comparer les mots de passe
userSchema.methods.comparePassword = async function (candidatePassword) {
  const bcrypt = require('bcrypt');
  return bcrypt.compare(candidatePassword, this.password);
};

// Export du modèle
module.exports = mongoose.model('User', userSchema);