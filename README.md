# Gas Subscribe

This is the MVP for ETHShanghai 2023.

# Overview

GasLockR is the first trustless GasFi protocol. Built for EVM-based chains, it leverages ZK proofs for trustless reading of historical gas prices and pricing models to build on-chain derivatives based on gas prices.

GasSubscribe is the first gas fee subscription service designed for L2's. It is built on top of the GasLockR protocol.

# Existing Problems

1. Reliability: More people than ever are becoming reliant on L2's. Organisations (including DAOs) need to be able to operate through turbulent times. Services need to provide guarantees for availability through SLAs (Service Level Agreements) in order for users to trust and adopt these services e.g. AWS provides SLAs for each of its service often more than 99.99%. In the past base gas fees on Polygon have spiked to $200 for a simple token transfer. This makes L2's unusable at times. L2's are not currently something users and organisations can rely on all of the time.

2. Onboarding: Users must already have tokens in their wallet to cover gas fees. This creates a chicken and egg problem where the user needs funds before they can do anything on-chain, presenting an uncessary barrier to the L2 onboarding process. Existing solutions like faucets are difficult to use and often don't provide enough to even cover the fees of a single transaction.

3. UX: Every time a user wants to submit a transaction, they have to manually approve transactions and think about what gas price to specify. This doesn't need to be the user's concern and it often confuses new web3 users.

# The future

1. In the future businesses will operate fully on-chain and users will use on-chain services daily. Fully on-chain DAOs will become more prevalent. Most of the on-chain activity will take place on L2's and it will be common for organisations to submit thousands of transactions per day to the L2. They should have the confidence that they will be able to continue operating through unexpected events and volatile gas prices.

2. With account abstraction (ERC-4337), you can have paymasters that pay for your gas fees - someone else can do that for you. And someone else can pay the gas for you meaning you don't need any tokens. However the paymasters need a way to protect themselves against price fluctuation. Hence, we provide GasSubscribe service.

3. In the future you will have much more friendly wallets where the user doesn't have to manually approve every transaction or even think about gas prices.

# What we built for GasLockR/GasSubscribe

GasLockR uses ZK coprocessor for trustlessly reading historical gas prices to provide verifiable correctly priced GasFi derivatives based on financial models that are updated in real time. GasLockR is interoperable with other protocols and can be used as foundational on-chain infrastructure to build protocols and services that will solve the reliability, onboarding and UX problems we face today.

We provide an efficient way to hedge against the risk of rising gas prices, allowing users and organisations to rely on L2's. Services that operate on-chain will finally be able to provide SLAs (Service Level Agreements) to their users, building trust and acting as a catalyst for web3 adoption.

With our trustless financial derivatives product, other wallets or services can build on reliable infrastructure for hedging gas fees. With account abstraction (ERC-4337), paymasters provide a way for someone else to pay your gas fees so that the user don't need any tokens in their wallet to start interacting on chain. With GasSubscribe, they can pay a monthly subscription fee to a paymaster in fiat to be able to submit up to 100 transactions in a month. Or a service could offer to pay for your first 5 transactions using their service.

With account abstraction (ERC-4337), users can create a session key just like logging into a game where they pre-approve particular transactions. Wallets can leverage this to automatically submit transactions on the user's behalf without them having to manually approve them and specify a gas price. Together with account abstraction, GasLockR allows wallets to provide a seamless user experience where the user is not even aware that gas prices exist.

We built GasSubscribe to work with Moonbeam's Call Permit Precompile service, a gas fee subscription service as a demonstration of how GasLockR can be used as financial infrastructure to build amazing services.

Through a pre-purchase of subscription, users can interact with other web3 services without feeling gas fees existing, and our service will pay for them.
