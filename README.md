# Customizable Web3Button for thirdweb


# REPO IN PROGRESS!!!!


Welcome to the Customizable Web3Button project! This project provides an intuitive interface for creating a custom button to interact with Ethereum smart contracts. This React component is perfect for developers who need to quickly generate buttons for their DApps.

![screencapture-localhost-3000-2023-04-27-19_05_22](https://user-images.githubusercontent.com/106103625/235013049-6b5af32c-27e6-4b31-8f79-ee68b1d667f8.png)

## Tools

This project is built with:

- [thirdweb](https://thirdweb.com)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [web3.js](https://web3js.readthedocs.io/en/v1.2.11/)

## Usage 

To use this project:

1. Open the website in your browser.
2. You will see a form with various input fields and checkboxes.
3. Fill in the necessary details:
    - `Contract Address`: The Ethereum address of the smart contract you want to interact with.
    - `Action`: The function you want to call on the smart contract.
    - `Contract ABI`: The ABI of the smart contract. This is a JSON array that describes how to interact with the contract.
    - `Overrides`: Any optional overrides you want to apply to the transaction.
    - `On Success` and `On Error`: Custom messages to be displayed on the execution of the action.
4. Check the boxes for the options you want to include with the button.
5. Click the 'Execute Action' button to interact with the smart contract.

## Installation & Running

To get the project up and running on your local machine for development and testing purposes, follow these steps:

1. Clone the repository to your local machine

```bash
git clone https://github.com/BankkRoll/thirdweb-Web3Button-generator.git
```

2. Navigate into the cloned repository

```bash
cd thirdweb-connect-wallet-generator
```

3. Install the dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

Now, the application should be running at `http://localhost:3000` on your browser.


## Contributing

Contributions are welcome! If you find a bug or have suggestions for improvements, please open an issue on the GitHub repository. If you'd like to contribute code:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -am 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.
