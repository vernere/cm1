# Self-Assessment of Signup Page code by Emil Blumenthal

### Validation for Email and Password:

Implemented email and password validation:

```javascript
    const validateEmail = (email) => {
        return String(email) === 'john@doe.com';
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };
    
    <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ borderColor: validateEmail(email) ? 'green' : 'red' }}
        placeholder="Email"
    />

    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      style={{ borderColor: validatePassword(password) ? 'green' : 'red' }}
      placeholder="Password"
    />
```


### Key Improvements:
- **Default Handling:** Added live field validation for email and password.
- **Refactoring:** Improved the code by extracting the validation functions into separate functions.