// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getFirestore,
    query,
    orderBy,
    onSnapshot,
    collection,
    getDoc, 
    getDocs, 
    addDoc,
    updateDoc,
    doc, 
    serverTimestamp, 
    arrayUnion
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYBu8QwRc-aYeUEO-ujSpkjeNaYND59eA",
  authDomain: "burnout-46863.firebaseapp.com",
  projectId: "burnout-46863",
  storageBucket: "burnout-46863.appspot.com",
  messagingSenderId: "931271712262",
  appId: "1:931271712262:web:a74316531ab7c9f01bed87",
  measurementId: "G-ZH4V70KW9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const ApplicationStatus = {
    Applied: 'Applied',
    Interviewing: 'Interviewing',
    Offer: 'Offer',
    Rejected: 'Rejected',
    Accepted: 'Accepted',
    NoResponse: 'No Response',
    Withdrawn: 'Withdrawn',
    Archived: 'Archived',
}

export const JobPositions = {
    SoftwareEngineer: 'Software Engineer',
    SoftwareDeveloper: 'Software Developer',
    SoftwareArchitect: 'Software Architect',
    SDET: 'SDET',
    FullStackEngineer: 'Full Stack Engineer',
    FullStackDeveloper: 'Full Stack Developer',
    FrontEndEngineer: 'Front End Engineer',
    FrontEndDeveloper: 'Front End Developer',
    BackEndEngineer: 'Back End Engineer',
    BackEndDeveloper: 'Back End Developer',
    QAEngineer: 'QA Engineer',
    QAAnalyst: 'QA Analyst',
    DataAnalyst: 'Data Analyst',
    DataScientist: 'Data Scientist',
    DataEngineer: 'Data Engineer',
    DataArchitect: 'Data Architect',
    DevOpsEngineer: 'DevOps Engineer',
    DevOpsArchitect: 'DevOps Architect',
    UIDesigner: 'UI Designer',
    UXDesigner: 'UX Designer',
    ProductManager: 'Product Manager',
    WebDesigner: 'Web Designer',
    WebDeveloper: 'Web Developer',
}


export const createApplication = (applicationData) => {
    const applicationsColRef = collection(db, "applications");
    return addDoc(applicationsColRef, {
        companyName: applicationData.companyName,
        dateApplied: applicationData.dateApplied || new Date(),
        applicationStatus: applicationData.applicationStatus || ApplicationStatus.Applied,
        jobPosition: applicationData.jobPosition,
        comments: applicationData.comments,
    }).then((newApplicationRef) => {
        console.log("Document written with ID: ", newApplicationRef.id);
    }).catch((error) => {
        console.error("Error adding document: ", error);
    });
}

export const updateApplication = (applicationData) => {
    // return (dispatch, getState, { getFirebase, getFirestore }) => {
    //     // make async call to database
    //     const firestore = getFirestore();
    //     firestore.collection('applications').doc(applicationData.id).update({
    //     companyName: applicationData.companyName,
    //     dateApplied: applicationData.dateApplied,
    //     applicationStatus: applicationData.applicationStatus,
    //     jobPosition: applicationData.jobPosition,
    //     comments: applicationData.comments,
    //     }).then(() => {
    //     dispatch({ type: 'UPDATE_APPLICATION', application });
    //     }).catch((err) => {
    //     dispatch({ type: 'UPDATE_APPLICATION_ERROR', err });
    //     })
    // }
    const applicationRef = doc(db, "applications", applicationData.id);
    return updateDoc(applicationRef, {
        companyName: applicationData.companyName,
        dateApplied: applicationData.dateApplied,
        applicationStatus: applicationData.applicationStatus,
        jobPosition: applicationData.jobPosition,
        comments: applicationData.comments,
    }).then(() => {
        console.log("Document successfully updated!");
    }
    ).catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

export const retrieveApplications = () => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('applications').get().then((querySnapshot) => {
            const applications = [];
            querySnapshot.forEach((doc) => {
                const application = doc.data();
                application.id = doc.id;
                applications.push(application);
            });
            dispatch({ type: 'RETRIEVE_APPLICATIONS', applications });
        }).catch((err) => {
            dispatch({ type: 'RETRIEVE_APPLICATIONS_ERROR', err });
        })
    }
}
