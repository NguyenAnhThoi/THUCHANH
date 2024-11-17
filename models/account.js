module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define('Account', {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true // Có thể bật/tắt tùy theo yêu cầu
    });
    return Account;
  };
  