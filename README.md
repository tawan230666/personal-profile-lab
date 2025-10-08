# 🎓 Personal Profile Card (Lab 3.1)

โปรเจกต์นี้เป็นส่วนหนึ่งของวิชา **ENGSE203 - Computer Programming for Software Engineers**  
หัวข้อ: _Lab 3.1 - ทำความรู้จักกับ React.js และ JSX_

โดยมีวัตถุประสงค์เพื่อฝึกการสร้าง **Component แบบ Interactive** ด้วย React.js และการจัดการข้อมูลผ่าน **Props และ State**

---

## 🧩 รายละเอียดโปรเจกต์

| รายการ | รายละเอียด |
|--------|-------------|
| 🔹 ผู้จัดทำ | นายธาวัน ทิพคุณ |
| 🔹 รหัสนักศึกษา | 67543210033-6 |
| 🔹 สาขา | วิศวกรรมซอฟต์แวร์ |
| 🔹 มหาวิทยาลัย | มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา |
| 🔹 ภาคเรียน | ปี 2 ภาคเรียนที่ 1 |

---

## ⚙️ เทคโนโลยีที่ใช้

- **React.js (ผ่าน Vite)** — สำหรับโครงสร้าง Component และ JSX
- **CSS3 (Flex / Grid)** — สำหรับจัด Layout และตกแต่ง UI
- **useState Hook** — จัดการ State ภายใน Component
- **Event Handling** — ใช้ `onClick` / `onChange` สำหรับอินเทอร์แอคชัน
- **Conditional Rendering** — แสดงผลตามเงื่อนไข เช่น Dark Mode, Achievements

---

## 📁 โครงสร้างไฟล์

```
personal-profile-lab/
└── src/
    ├── App.jsx
    ├── ProfileCard.jsx
    ├── ProfileCard.css
    └── main.jsx
```

---

## 🖼️ ผลลัพธ์การแสดงผล

### 🌞 Light Mode
![Light Mode Screenshot](screenshots/light-mode.png)

### 🌙 Dark Mode
![Dark Mode Screenshot](screenshots/dark-mode.png)

> 📸 หมายเหตุ: ภาพตัวอย่างแสดงผลจริงจาก Browser โดยใช้โค้ดในไฟล์ `App.jsx` และ `ProfileCard.jsx`  
> (คุณสามารถเปลี่ยนรูปในโฟลเดอร์ `screenshots/` ได้ตามต้องการ)

---

## 💻 วิธีการรันโปรเจกต์

```bash
# 1. สร้างโปรเจกต์ใหม่ด้วย Vite
npm create vite@latest personal-profile-lab -- --template react
cd personal-profile-lab

# 2. ติดตั้ง dependencies
npm install

# 3. รันโปรเจกต์
npm run dev
```

เปิดเบราว์เซอร์ที่:
👉 http://localhost:5173  

---

## 🏆 เกณฑ์การประเมินผล

| ระดับ | รายละเอียด | สถานะ |
|--------|--------------|--------|
| **พื้นฐาน (70%)** | ✅ ทำ Challenge 1 สำเร็จ (เปลี่ยนข้อมูลส่วนตัว + Social Links)<br>✅ แสดงข้อมูลครบถ้วนและถูกต้อง | ✔️ |
| **ดี (80%)** | ✅ Challenge 1 + 2 สำเร็จ<br>✅ Theme toggle ทำงานได้<br>✅ Achievement badges แสดงตามเงื่อนไข | ✔️ |
| **ดีเยี่ยม (90–100%)** | ✅ ทำครบทั้ง 3 Challenges<br>✅ Interactive features ทำงานได้ถูกต้อง<br>✅ UI/UX สวยงาม มี animations<br>✅ Code เขียนได้สะอาดและมี comments | ✔️ |

---

## 💬 Features เด่น

- 🌓 **Dark/Light Mode Toggle** — เปลี่ยนธีมด้วยปุ่ม 🌙☀️  
- 👁️ **View Counter** — นับจำนวนการคลิกที่การ์ด  
- 💖 **Favorite Hobbies** — คลิกที่งานอดิเรกเพื่อเพิ่มเป็นรายการโปรด  
- 🧑‍💻 **Interactive Skills** — คลิกเพื่อแสดงความเชี่ยวชาญ  
- 🏅 **Achievement Badges** — แสดงตราสัญลักษณ์ตาม GPA และจำนวนทักษะ  
- 📧 **Contact Form** — ส่งข้อความถึงเจ้าของโปรไฟล์  
- 📱 **Responsive Design** — รองรับมือถือ 100%

---

## 🧠 สิ่งที่ได้เรียนรู้

- การใช้ React Component และ Props  
- การจัดการ State ด้วย `useState`  
- การใช้ Event Handling และ Conditional Rendering  
- การออกแบบ UI ที่ Responsive  
- การคิดแบบ Component-based Thinking

---

## ✨ ผู้จัดทำ

**นายธาวัน ทิพคุณ**  
สาขาวิศวกรรมซอฟต์แวร์ — มทร.ล้านนา  
📧 `tawan.thipkun@rmutl.ac.th`  
🔗 [GitHub: tawan230666](https://github.com/tawan230666)

---
# Lab3-1_basic-reactjs.md
