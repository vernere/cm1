# Self-Assessment  of Code

# Self-Assessment - Verner Etola

### Validation for Email and Phone Number:

  Default handling was not to validate the email and phone number.

```javascript
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  // Validate phone number format (allowing spaces, dashes, parentheses)
  function isValidPhone(phone) {
    return /^[0-9\-\(\)\s]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  }
```


### Key Improvements:
- **Default Handling:** Instead of not using any handling for data, we have refactored the code to check the email and phone number, and if they are invalid, we will show an alert.


---

### Unique Keys for List Items

In the defaault handling index is used to generate a unique key for each contact.

```javascript
  function addContact() {
    if (name.trim() !== "" && isValidEmail(email) && isValidPhone(phone)) {
      setContacts((c) => [...c, { id: Date.now(), name, email, phone }]);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      alert("Please enter valid name, email, and phone number.");
    }
  }

  <li key={contact.id}>
  
```

### Solution:

We can use the `id` property to generate a unique key for each contact.


**Lessons Learned:**

1. **Refactoring:** Most of the solutions were simple but easily improved. With a little effort for small changes like this, we can make the code more readable and maintainable.



