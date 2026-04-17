# 🎬 TMDb - QA Technical Test

## 📌 Overview
Project ini merupakan implementasi **End-to-End (E2E) Automation Testing** untuk website TMDb menggunakan pendekatan:

- ✅ **Cypress + Cucumber (BDD)**
- ✅ Berbasis **Acceptance Criteria**
- ✅ Menggunakan **Gherkin (.feature)**
- ✅ Fokus pada fitur utama:
  - Change Language
  - Mark as Favorite
  - View Favorite List
  - Sorting Favorite
  - Remove Favorite

Testing dilakukan berdasarkan **31 test cases** yang mencakup skenario **positive & negative testing**.

---

## 🛠 Tech Stack
- Cypress
- JavaScript
- Node.js
- Cucumber (BDD - Gherkin)

---

## ⚙️ Prerequisites
Pastikan sudah terinstall:

- Node.js v18+
- npm

Cek versi:
```bash
node -v
npm -v
````

---

## 📦 Installation

Clone project lalu install dependencies:

```bash
npm install
```

---

## ▶️ How to Run Tests

### GUI Mode

```bash
npx cypress open
```

### Headless Mode

```bash
npx cypress run
```

---

## 🧪 Test Coverage

| Feature            | Coverage |
| ------------------ | -------- |
| Change Language    | ✅        |
| Mark as Favorite   | ✅        |
| View Favorite List | ✅        |
| Sorting Favorite   | ✅        |
| Remove Favorite    | ✅        |

---

## 📊 Test Results Summary

Dari total **31 test cases**:

| Status     | Jumlah |
| ---------- | ------ |
| ✅ Pass     | 23     |
| ❌ Fail     | 4      |
| ⚠️ Warning | 4      |

---

## 🔍 Detailed Findings (Bug Report)

### ❌ 1. Inconsistent Language Translation

* **Feature:** Change Language (TC-UB-001, TC-UB-005)
* **Issue:** Tidak semua elemen UI berubah bahasa
* **Impact:** UX tidak konsisten
* **Contoh:**

  * Navigation menu masih English
  * Trending label tidak berubah

---

### ⚠️ 2. Missing Notification (Favorite Action)

* **Feature:** Mark as Favorite (TC-MF-002)
* **Issue:** Tidak ada notifikasi saat add favorite dari Movie detail page
* **Expected:** Ada success popup
* **Actual:** Tidak muncul

---

### ⚠️ 3. Toggle Favorite Behavior Tidak Konsisten

* **Feature:** Mark as Favorite (TC-MF-004)
* **Issue:** Klik favorite lagi malah remove (toggle)
* **Expected:** Tidak duplicate / tetap favorite
* **Actual:** Movie dihapus dari favorite list

---

### ❌ 4. Sorting Preference Tidak Tersimpan

* **Feature:** Sorting Favorite (TC-SF-003)
* **Issue:** Sorting reset setelah login ulang
* **Expected:** Preference tersimpan
* **Actual:** Kembali ke default

---

### ❌ 5. State Tidak Sinkron Antar Tab

* **Feature:** Remove Favorite (TC-RF-004)
* **Issue:** Perubahan tidak realtime antar tab
* **Expected:** Sync semua tab
* **Actual:** Tidak update

---

### ⚠️ 6. Inconsistent Notification on Remove

* **Feature:** Remove Favorite (TC-RF-003, TC-RF-005)
* **Issue:**

  * Tidak selalu muncul notifikasi
  * Counter jumlah movie pada favorite list tidak update 

---

## 📸 Test Results Evidence

* Screenshot dan Rekaman Layar Temuan Bug
* Video Showcase Project

---

## 💡 Feedback untuk UI/UX & Developer

### 🎯 UI/UX Improvements

* Gunakan **consistent language switching**
* Tambahkan **loading state saat reload language**
* Berikan **feedback visual (toast/snackbar)** yang konsisten

---

### 🧠 Functional Improvements

* Simpan user preference (sorting, language)
* Hindari toggle behavior ambigu pada favorite
* Sync state antar tab (gunakan localStorage / API polling)

---

### 🧪 Testing Improvements

* Tambahkan **data-testid selector** → supaya Cypress stabil
* Hindari selector berbasis class dynamic
* Tambahkan **API mocking untuk negative scenario**

---

## 🧱 Project Structure (Simplified)

```
cypress/
  e2e/
    features/
      step_definitions/
        tmdb.js
      tmdb.feature
  support/
    commands.js
    e2e.js
node_modules/
test-cases/
  test_scenarios.md
test-results/
  screenshots/
  videos/
cypress.config.js
package-lock.json
package.json
```

---

## 🚀 Notes

Project ini sudah:

* ✔️ Menggunakan **BDD (Gherkin)**
* ✔️ Mendukung **E2E automation**

---

