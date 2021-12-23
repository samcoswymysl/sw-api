module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: 'You must give your email' },
          notEmpty: { msg: 'Email can\'t be empty value' },
          isEmail: { msg: 'Email must be a valid email' },
        },
      },

      password: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notNull: { msg: 'You must give password' },
          notEmpty: { msg: 'Password can\'t be empty value' },
        },
      },
      publicKey: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
          notNull: { msg: 'Key can\'t be null' },
          notEmpty: { msg: 'Key can\'t be empty value' },
        },
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('users');
  },
};
