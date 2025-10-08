import React from 'react';
import ProfileCard from './ProfileCard.jsx';

function App() {
    // ข้อมูลโปรไฟล์ตัวอย่าง
    const sampleProfile = {
        name: "ธาวัน ทิพคุณ",
        studentId: "67543210033-6",
        major: "วิศวกรรมซอฟต์แวร์",
        year: 2,
        age: 19,
        gpa: 3.50,
        email: "tawan.thipkun@rmutl.ac.th",
        hobbies: [
            "เขียนโค้ด",
            "ออกกำลังกาย",
            "ฟังเพลง",
            "ดูหนัง",
            "เล่นเกม"
        ],
        skills: [
            "JavaScript",
            "React.js",
            "Node.js",
            "Python",
            "MySQL",
            "Git"
        ],
        socialLinks: [
            { platform: "GitHub", url: "https://github.com/tawan230666" },
            { platform: "LinkedIn", url: "https://www.linkedin.com/jobs/" },
            { platform: "Instagram", url: "https://www.instagram.com/t.xfawnu._p/" }
        ]
    };

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
            padding: '20px'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h1 style={{ 
                    color: '#333', 
                    fontSize: '32px',
                    margin: '20px 0'
                }}>
                    🎓 Personal Profile Card
                </h1>
                <p style={{ color: '#666', fontSize: '16px' }}>
                    Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
                </p>
            </div>
            
            <ProfileCard profile={sampleProfile} />
        </div>
    );
}

export default App;
