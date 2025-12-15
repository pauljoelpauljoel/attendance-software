const mongoose = require('mongoose');

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://pauljoel:pauljoel@cluster0.awq2jin.mongodb.net/?appName=Cluster0';

mongoose.connect(MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Student Schema
const studentSchema = new mongoose.Schema({
    reg: { type: String, required: true, unique: true },
    name: String,
    dept: String,
    shift: String,
    class: String,
    email: String,
    year: String,
    status: String,
    date: { type: Date, default: Date.now }
});

const Student = mongoose.model('Student', studentSchema);

const students = [
    { reg: "24128028", name: "Kiruthika K", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128028@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128044", name: "Ramya M", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128044@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128047", name: "Ritu", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128047@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128051", name: "Sakthi R", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128051@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128055", name: "Saravanan S", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128055@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128046", name: "Rishivarman G", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128046@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128065", name: "Vedhavarshini N", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128065@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128062", name: "Sri Thraishika S", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128062@srcas.ac.in", shift: "Second Shift" },
    { reg: "24106129", name: "Vignesh K", dept: "B.Sc CS", year: "2nd", email: "24106129@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128025", name: "Jayakandhan M", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128025@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128050", name: "Sabareeshwaran P", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128050@srcas.ac.in", shift: "Second Shift" },
    { reg: "24128001", name: "K Aakash", dept: "B.Sc CS (AI & DS)", year: "2nd", email: "24128001@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129050", name: "Shalini C R", dept: "B.Sc Computer Technology", year: "2nd", email: "24129050@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129043", name: "Sadashini V", dept: "B.Sc Computer Technology", year: "2nd", email: "24129043@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129045", name: "Sanjay N", dept: "B.Sc Computer Technology", year: "2nd", email: "24129045@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129008", name: "Ayyappadas T V", dept: "B.Sc Computer Technology", year: "2nd", email: "24129008@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129025", name: "Mahalakshmi S", dept: "B.Sc Computer Technology", year: "2nd", email: "24129025@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129066", name: "Yuvaraj C", dept: "B.Sc Computer Technology", year: "2nd", email: "24129066@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129048", name: "Sasmita V A", dept: "B.Sc Computer Technology", year: "2nd", email: "24129048@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129058", name: "Swapna Samanta", dept: "B.Sc Computer Technology", year: "2nd", email: "24129058@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129038", name: "Padmesh M", dept: "B.Sc Computer Technology", year: "2nd", email: "24129038@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129022", name: "Karthikeyan G", dept: "B.Sc Computer Technology", year: "2nd", email: "24129022@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129021", name: "Joyslin L", dept: "B.Sc Computer Technology", year: "2nd", email: "24129021@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129051", name: "Sharan R", dept: "B.Sc Computer Technology", year: "2nd", email: "24129051@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129013", name: "Ganesh M", dept: "B.Sc Computer Technology", year: "2nd", email: "24129013@srcas.ac.in", shift: "Second Shift" },
    { reg: "24106075", name: "S. Chithra", dept: "B.Sc Computer Science", year: "2nd", email: "24106075@srcas.ac.in", shift: "Second Shift" },
    { reg: "24106087", name: "Jeya Parvathi B", dept: "B.Sc Computer Science", year: "2nd", email: "24106087@srcas.ac.in", shift: "Second Shift" },
    { reg: "24106085", name: "Ishwarya S", dept: "B.Sc Computer Science", year: "2nd", email: "24106085@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105087", name: "Hari Prashandh", dept: "BCA", year: "2nd", email: "24105087@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105086", name: "Hari Karan S", dept: "BCA", year: "2nd", email: "24105086@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105069", name: "V. Ajithkumar", dept: "BCA", year: "2nd", email: "24105069@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105110", name: "Rasika N", dept: "BCA", year: "2nd", email: "24105110@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105111", name: "Raviprabha T", dept: "BCA", year: "2nd", email: "24105111@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105070", name: "Akilan G", dept: "BCA", year: "2nd", email: "24105070@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105122", name: "Stephin Prasath", dept: "BCA", year: "2nd", email: "24105122@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105120", name: "Sriram", dept: "BCA", year: "2nd", email: "24105120@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130044", name: "Rithika", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130044@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130021", name: "S. Gopika", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130021@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130042", name: "Priyadharshini V", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130042@srcas.ac.in", shift: "Second Shift" },
    { reg: "25140047", name: "Sabari Vasan", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25140047@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130028", name: "Kanmani S", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130028@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130061", name: "Theo Antony A", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130061@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130020", name: "Gokulavani V", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130020@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130018", name: "Dheeksha J", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130018@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130051", name: "Siddharth K", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130051@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130024", name: "Harshini", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130024@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130066", name: "Yakshitha P V", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130066@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129041", name: "Sabarish R", dept: "B.Sc Computer Technology", year: "1st", email: "25129041@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129054", name: "Sujan M S", dept: "B.Sc Computer Technology", year: "1st", email: "25129054@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130008", name: "Atshya A", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130008@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130012", name: "Devaashree R", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130012@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130031", name: "Manimegalai P", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130031@srcas.ac.in", shift: "Second Shift" },
    { reg: "25104131", name: "Yashika J", dept: "B.Com CA", year: "1st", email: "25104131@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129008", name: "Dhakshana M", dept: "B.Sc Computer Technology", year: "1st", email: "25129008@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129004", name: "Asra Fathima A", dept: "B.Sc Computer Technology", year: "1st", email: "25129004@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129064", name: "Vinodhini S", dept: "B.Sc Computer Technology", year: "1st", email: "25129064@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130050", name: "Shiva Ganesh", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130050@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129002", name: "Anunandana M", dept: "B.Sc Computer Technology", year: "1st", email: "25129002@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129043", name: "Sanjai S M", dept: "B.Sc Computer Technology", year: "1st", email: "25129043@srcas.ac.in", shift: "Second Shift" },
    { reg: "25130054", name: "Sreya S", dept: "B.Sc CS with Cyber Security", year: "1st", email: "25130054@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129016", name: "Gowtham S", dept: "B.Sc Computer Technology", year: "1st", email: "25129016@srcas.ac.in", shift: "Second Shift" },
    { reg: "25105074", name: "Balaji", dept: "BCA", year: "1st", email: "25105074@srcas.ac.in", shift: "Second Shift" },
    { reg: "25105079", name: "Fanny Crosby S", dept: "BCA", year: "1st", email: "25105079@srcas.ac.in", shift: "Second Shift" },
    { reg: "25105132", name: "Yazhini G", dept: "BCA", year: "1st", email: "25105132@srcas.ac.in", shift: "Second Shift" },
    { reg: "25105073", name: "S. Bala Akash Raj", dept: "BCA", year: "1st", email: "25105073@srcas.ac.in", shift: "Second Shift" },
    { reg: "25129028", name: "Narenshaswath", dept: "B.Sc Computer Technology", year: "1st", email: "25129028@srcas.ac.in", shift: "Second Shift" },
    { reg: "25105123", name: "Subalaksmi S", dept: "BCA", year: "1st", email: "25105123@srcas.ac.in", shift: "Second Shift" },
    { reg: "25128035", name: "Maris S", dept: "B.Sc CS AI & DS", year: "1st", email: "25128035@srcas.ac.in", shift: "Second Shift" },
    { reg: "25128011", name: "Arun Prabhu D", dept: "B.Sc CS AI & DS", year: "1st", email: "25128011@srcas.ac.in", shift: "Second Shift" },
    { reg: "25107121", name: "Savitha M", dept: "B.Sc Information Technology", year: "1st", email: "25107121@srcas.ac.in", shift: "Second Shift" },
    { reg: "25107080", name: "Harini", dept: "B.Sc Information Technology", year: "1st", email: "25107080@srcas.ac.in", shift: "Second Shift" },
    { reg: "24105097", name: "Mithun Chakravarthy R", dept: "BCA", year: "2nd", email: "24105097@srcas.ac.in", shift: "Second Shift" },
    { reg: "251300437570", name: "Renuka S", dept: "B.Sc CS with Cyber Security", year: "1st", email: "251300437570@srcas.ac.in", shift: "Second Shift" },
    { reg: "24129020", name: "Jeevika P", dept: "B.Sc Computer Technology", year: "2st", email: "24129020@srcas.ac.in", shift: "Second Shift" }
];

async function seed() {
    try {
        await Student.deleteMany({});
        console.log('Cleared existing students');

        await Student.insertMany(students);
        console.log(`Seeded ${students.length} students`);

        mongoose.disconnect();
        console.log('Done!');
    } catch (error) {
        console.error('Seed error:', error);
        mongoose.disconnect();
    }
}

seed();
