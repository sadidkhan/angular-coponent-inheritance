# Angular Component Inheritance

A practical demonstration of component inheritance patterns in Angular, showcasing how to create reusable base components and extend them with specialized functionality.

## 📖 Related Article

This repository accompanies the Medium article: [Angular Component Inheritance](https://medium.com/@sadidkhan/angular-component-inheritance-888c2a2d3b27)

## 🎯 Overview

This project demonstrates Angular component inheritance by implementing:
- A **BaseComponent** with common functionality
- Two specialized components (**AComponent** and **BComponent**) that extend the base
- Shared service communication using RxJS
- Proper lifecycle management and memory leak prevention

## 🏗️ Architecture

### BaseComponent
- Implements `OnInit` and `OnDestroy` lifecycle hooks
- Manages RxJS subscriptions with proper cleanup
- Provides abstract methods for child components to implement
- Handles common subscription logic using `takeUntil` pattern

### Child Components
- **AComponent**: Extends BaseComponent and displays data as text
- **BComponent**: Extends BaseComponent and displays data in a reactive form input

### Service Layer
- **AppService**: Provides a shared Subject for component communication
- Enables real-time data updates across inherited components

## 🚀 Features

- ✅ Component inheritance with TypeScript
- ✅ Shared lifecycle management
- ✅ RxJS subscription handling with memory leak prevention
- ✅ Reactive forms integration
- ✅ Real-time data updates via service
- ✅ Interactive component switching

## 🛠️ Key Concepts Demonstrated

1. **Inheritance**: Using `extends` keyword to inherit from BaseComponent
2. **Super calls**: Proper use of `super()` in constructors and lifecycle methods
3. **Abstract methods**: Template method pattern with `setData()` implementation
4. **Memory management**: Automatic subscription cleanup in base component
5. **Service injection**: Shared service across component hierarchy

## 🔄 How It Works

1. **Timer Service**: App generates incremental numbers every 2 seconds
2. **Base Processing**: BaseComponent receives data and calls `process()` method
3. **Child Implementation**: Each child component implements `setData()` differently:
   - AComponent updates a template variable
   - BComponent updates a reactive form control
4. **Real-time Updates**: Both components display live counter updates

## 🖥️ Live Demo

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-coponent-inheritance)

## 💡 Learning Outcomes

After exploring this project, you'll understand:
- How to implement component inheritance in Angular
- Best practices for shared component logic
- Proper RxJS subscription management
- Template method pattern implementation
- Service-based component communication

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements or additional inheritance patterns.

## 📄 License

MIT License - feel free to use this code for learning and teaching purposes.

## 👨‍💻 Author

**Sadid Khan**
- Medium: [@sadidkhan](https://medium.com/@sadidkhan)
- GitHub: [@sadidkhan](https://github.com/sadidkhan)

---
