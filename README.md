# Portfolio Website

Een modern, responsief portfolio website met dark/light mode en gebruikersauthenticatie.

## 📋 Features

- **Responsive Design**: Volledig responsive layout met Bootstrap 5.3.0
- **Dark/Light Mode**: Theme toggle met localStorage persistentie
- **Project Showcase**: Interactieve projectgalerij met detail pagina's
- **Contact Form**: Formulier met validatie en bevestiging
- **User Authentication**: Volledige login/registratie systeem
- **Account Management**: Gebruikersprofiel bekijken en bewerken
- **Modern UI**: Gradient designs, animaties met AOS library
- **Shared Components**: Header en footer via JavaScript geladen

## 🚀 Technologieën

### Frontend
- HTML5
- CSS3 met CSS Custom Properties
- JavaScript (ES6+)
- Bootstrap 5.3.0
- Bootstrap Icons
- AOS (Animate On Scroll)
- Google Fonts (Poppins)

### Backend
- PHP 7+
- MySQL Database
- PDO voor database connecties
- Password hashing met `password_hash()`
- Session management
- Prepared statements (SQL injection preventie)

## 📁 Project Structuur

```
protfolio/
├── backend/
│   ├── auth/
│   │   ├── login.php          # Login endpoint
│   │   ├── register.php       # Registratie endpoint
│   │   └── logout.php         # Logout handler
│   ├── user/
│   │   ├── get_account.php    # Ophalen gebruikersgegevens
│   │   └── update_account.php # Updaten profiel
│   ├── config/
│   │   └── database.php       # Database connectie
│   └── database.sql           # Database schema
├── css/
│   └── style.css              # Main stylesheet met theme variabelen
├── html/
│   ├── index.html             # Homepage met alle secties
│   ├── login.html             # Login/registratie pagina
│   ├── account_details.html   # Account management
│   ├── webshop.html           # Project detail: Webshop
│   ├── responsive-design.html # Project detail: Responsive Design
│   ├── project-wip.html       # Project detail: Work in Progress
│   └── shared/
│       ├── header.html        # Gedeelde navigatie
│       └── footer.html        # Gedeelde footer
├── js/
│   ├── script.js              # Main JavaScript (theme, header/footer loading)
│   └── auth.js                # Authentication handlers (AJAX)
├── image/
│   ├── bootstrap/             # Bootstrap project afbeeldingen
│   ├── homepage/              # Homepage afbeeldingen
│   └── webshop/               # Webshop project afbeeldingen
├── favicon/
│   ├── favicon.svg            # SVG favicon
│   ├── about.txt
│   └── site.webmanifest
└── README.md
```

## 🛠️ Installatie

### Vereisten
- XAMPP (Apache + MySQL + PHP)
- Modern web browser

### Stap 1: Clone Repository
```bash
git clone https://github.com/hypox/protfolio.git
cd protfolio
```

### Stap 2: Kopieer naar XAMPP
```bash
cp -r protfolio /c/xampp/htdocs/
```

### Stap 3: Start XAMPP
1. Open XAMPP Control Panel
2. Start **Apache**
3. Start **MySQL**

### Stap 4: Database Setup
```bash
# Via command line
mysql -u root -p < backend/database.sql

# Of via phpMyAdmin:
# 1. Open http://localhost/phpmyadmin
# 2. Importeer backend/database.sql
```

### Stap 5: Database Configuratie
Controleer `backend/config/database.php`:
```php
$host = 'localhost';
$db = 'portfolio_db';
$user = 'root';
$pass = ''; // Pas aan indien je een MySQL wachtwoord hebt
```

## 🎮 Gebruik

### Toegang tot Website
- **Homepage**: http://localhost/protfolio/html/index.html
- **Login**: http://localhost/protfolio/html/login.html
- **Account**: http://localhost/protfolio/html/account_details.html

### Test Account
Na database import is er een test account beschikbaar:
- **Email**: andre@example.com
- **Password**: password123

### Features Uitproberen

#### 1. Dark/Light Mode
- Klik op de theme toggle schakelaar in de navigatiebalk
- Theme keuze wordt opgeslagen in localStorage

#### 2. Projecten Bekijken
- Scroll naar "My Projects" sectie
- Klik op een project card voor details
- Bekijk project screenshots in de galerij

#### 3. Contact Formulier
- Scroll naar "Get in Touch" sectie
- Vul formulier in en verstuur
- Ontvang bevestigingsmodal

#### 4. Account Registratie
1. Ga naar login pagina
2. Klik op "Register" tab
3. Vul gegevens in (min. 8 karakters wachtwoord)
4. Klik "Register"

#### 5. Inloggen
1. Gebruik email en wachtwoord
2. Bij succes: redirect naar account details
3. Bij fout: error bericht verschijnt

#### 6. Profiel Bewerken
1. Log in op je account
2. Ga naar account details pagina
3. Klik "Edit Profile"
4. Pas naam/email aan
5. Sla wijzigingen op

## 🎨 Theme Systeem

### CSS Variabelen
```css
/* Dark Mode (default) */
:root {
  --primary-color: #4e54c8;
  --bg-color: #0f0f23;
  --card-bg: #1a1a2e;
  --text-color: #ffffff;
  --text-muted: #a0a0a0;
  --border-color: #2a2a3e;
  --input-bg: #16213e;
}

/* Light Mode */
body.light-mode {
  --bg-color: #ffffff;
  --card-bg: #f8f9fa;
  --text-color: #212529;
  --text-muted: #6c757d;
  --border-color: #dee2e6;
  --input-bg: #ffffff;
}
```

## 🔐 Security Features

- **Password Hashing**: `password_hash()` met `PASSWORD_DEFAULT`
- **Prepared Statements**: Alle database queries gebruiken PDO prepared statements
- **Session Management**: Veilige PHP sessions voor authenticatie
- **Input Validation**: Client-side en server-side validatie
- **SQL Injection Preventie**: PDO bindings
- **XSS Preventie**: Proper output escaping

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🤝 Contributing

1. Fork het project
2. Maak een feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit je changes (`git commit -m 'Add some AmazingFeature'`)
4. Push naar de branch (`git push origin feature/AmazingFeature`)
5. Open een Pull Request

## 📝 Database Schema

### Users Table
```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🐛 Troubleshooting

### Apache Start Niet
```bash
# Check welke service port 80 gebruikt
netstat -ano | findstr :80

# Stop IIS (Windows)
net stop w3svc
```

### Database Connectie Fout
- Controleer of MySQL draait in XAMPP
- Verify database credentials in `backend/config/database.php`
- Check of `portfolio_db` database bestaat

### 404 Errors op Backend
- Zorg dat je de portfolio map in `C:/xampp/htdocs/` hebt gekopieerd
- Check dat Apache draait
- Verify file paths in AJAX requests

### Dark Mode Werkt Niet
- Clear browser localStorage
- Check browser console voor JavaScript errors
- Verify `script.js` is geladen

## 📄 License

Dit project is gelicenseerd onder de MIT License.

## 👤 Auteur

**Andre**
- GitHub: [@hypox](https://github.com/hypox)

## 🙏 Acknowledgments

- Bootstrap Team voor het UI framework
- AOS Library voor scroll animaties
- Bootstrap Icons voor iconen
- Google Fonts voor Poppins font
