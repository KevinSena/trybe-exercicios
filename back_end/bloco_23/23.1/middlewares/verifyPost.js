const verifyPost = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const resBadReq = (name) => res.status(400).json({
    "error": true,
    "message": `O campo ${name} deve ser inseridos corretamente`
  });
  const regex = /\S+@\S+\.\S+/;

  if (!firstName) return resBadReq('firstName');
  if (!lastName) return resBadReq('lastName');
  if (!email) return resBadReq('email');
  if (!regex.test(email)) return resBadReq('email');
  if (password.length < 6) return resBadReq('password');
  next();
}

module.exports = { verifyPost };
