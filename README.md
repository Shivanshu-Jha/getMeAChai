# ☕ GetMeAChai

GetMeAChai is a full-stack web application that enables users to support creators and developers by “buying them a chai.” It integrates secure payment flows with Razorpay and GitHub authentication, offering a smooth experience for both supporters and creators. Built with Next.js and MongoDB, and deployed on Vercel, it combines a modern frontend with a robust backend.

## 🌐 Live Demo
Check it out here: [get-me-a-chai-lovat-gamma.vercel.app](https://get-me-a-chai-lovat-gamma.vercel.app/)

## 📁 Project Structure

GetMeAChai/

├── app/              # Next.js App Router pages & APIs  
├── models/           # Mongoose models (User, Payment)  
├── db/               # Database connection utilities  
├── public/           # Static assets  
└── .gitignore        # Sensitive file exclusions  

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), React, Context API  
- **Backend:** Node.js, NextAuth.js  
- **Database:** MongoDB (Atlas)  
- **Payments:** Razorpay Integration  
- **Deployment:** Vercel  

## ⚙️ Features

- 🔐 GitHub OAuth authentication with NextAuth  
- 💳 Secure Razorpay payment integration  
- 📦 MongoDB persistence for users and payments  
- 🧪 Modular backend with reusable connection utilities  
- 🚀 Deployed seamlessly on Vercel  

## 🚀 Getting Started

### Prerequisites
- Node.js  
- MongoDB (local or Atlas cluster)  
- Razorpay account (for API keys)  
- Vercel CLI (optional for deployment)  

### Installation

```bash
# Clone the repo
git clone https://github.com/Shivanshu-Jha/GetMeAChai.git
cd GetMeAChai
