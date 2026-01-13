# Insurance PAS Core
## Functional Specification Document (FSD)

Version: 4.0  
Prepared By: Ameya Belvalkar And Shruti Tibhe  
Date: January 2026  
Domain: Banking & Insurance  
Architecture: REST, MVC  
Backend: Node.js, Express, MongoDB  
Frontend: React, Tailwind CSS

---

# 1. Introduction

Insurance PAS Core is an enterprise-grade Policy Administration System designed to support end-to-end insurance operations for banks and insurance companies. The system manages the complete policy lifecycle starting from customer onboarding, quote generation, underwriting, policy issuance, endorsements, renewals, claims registration, settlement processing, and regulatory reporting.

This document provides a detailed functional specification covering business rules, system behavior, API contracts, validations, and non-functional requirements. It serves as a reference for business stakeholders, developers, QA teams, compliance officers, and auditors.

# 2. Business Objectives

- Digitize insurance operations to eliminate manual processing
- Reduce policy issuance turnaround time
- Improve customer experience through self-service
- Enforce regulatory compliance
- Provide audit traceability
- Enable multi-channel integration
- Support scalability for high transaction volumes

# 3. Scope

## 3.1 In-Scope

- User authentication and role-based access
- Quote generation and premium calculation
- Policy issuance and lifecycle management
- Endorsements and renewals
- Claims FNOL and settlement
- Master data management
- Reporting and audit logs

## 3.2 Out-of-Scope

- Core banking ledger posting
- External accounting reconciliation
- Third-party dispute management
- Manual offline processing
- Payment gateway settlement (future scope)

# 4. Assumptions

- All users are pre-registered by bank admin
- MongoDB is the primary data store
- JWT token validity is 7 days
- System is accessed over secure network
- Regulatory guidelines remain stable

# 5. Dependencies

- MongoDB Atlas cluster
- Email/SMS gateway
- Identity provider
- Document storage service
- Future payment gateway integration

# 6. System Architecture

The system follows MVC architecture.

Controller Layer:
- Handles HTTP requests
- Performs validations
- Invokes business logic

Model Layer:
- Defines database schema
- Enforces constraints
- Executes CRUD operations

View Layer:
- Standardizes API responses
- Masks sensitive fields

Security:
- JWT authentication
- RBAC enforcement
- HTTPS communication

Observability:
- Correlation ID
- Centralized logging

# 7. Roles & Permissions

ADMIN:
- Manage users
- Configure master data
- System monitoring

UNDERWRITER:
- Approve high-risk quotes
- Modify risk parameters

CLAIMS_ADJUSTER:
- Investigate claims
- Approve settlements

AGENT:
- Create quotes
- Issue policies

CUSTOMER:
- View policies
- Register claims

# 8. Module Functional Flow

Authentication Flow:
1. User logs in
2. Credentials validated
3. JWT issued

Quote Flow:
1. Agent submits risk details
2. System calculates premium
3. Quote generated

Policy Flow:
1. Quote accepted
2. Idempotency check
3. Policy issued

Claims Flow:
1. FNOL registered
2. Adjuster review
3. Settlement processed

# 9. API Specifications

| API | Method | Purpose |
|-----|--------|---------|
| /auth/login | POST | User authentication |
| /quotes | POST | Create quote |
| /quotes/:id | GET | Get quote |
| /quotes/:id/convert | POST | Issue policy |
| /policies | GET | List policies |
| /claims | POST | Register claim |
| /claims/:id | GET | Claim details |
| /claims/:id/status | PATCH | Update status |

# 10. Field-Level Mapping

User Table
| Field | Type | Mandatory |
| name | String | Yes |
| email | String | Yes |
| password | String | Yes |
| role | Enum | Yes |

Quote Table
| quoteNo | String | Yes |
| premium | Number | Yes |
| status | Enum | Yes |

Policy Table
| policyNo | String | Yes |
| startDate | Date | Yes |
| endDate | Date | Yes |

Claim Table
| claimId | String | Yes |
| reserve | Number | Yes |
| status | Enum | Yes |

# 11. Business Rules

Authentication:
- Password encrypted
- Token expiry enforced

Quote:
- Age mandatory
- Risk loading applied

Policy:
- Idempotency enforced
- Only NEW quotes allowed

Claims:
- Policy must be ACTIVE

# 12. Validation Matrix

| Module | Validation |
| Auth | Invalid credentials -> 401 |
| Quote | Missing age -> 400 |
| Policy | Duplicate convert -> 409 |
| Claims | Expired policy -> 400 |

# 13. Error Handling

400 - Bad request
401 - Unauthorized
403 - Forbidden
404 - Not found
500 - Server error

# 14. Security Design

- JWT authentication
- Role-based access
- Encrypted passwords
- HTTPS

# 15. Audit & Compliance

- All actions logged
- Logs retained 7 years
- User, IP, timestamp captured

# 16. Testing Strategy

- Functional testing
- Regression testing
- Integration testing
- Security testing
- Performance testing

# 17. Non-Functional Requirements

- Response time < 2 seconds
- 99.9% uptime
- Horizontal scalability
- Disaster recovery

# 18. Risks & Mitigation

- High traffic -> Load balancing
- DB outage -> Replica set
- Security breach -> MFA

# 19. Future Enhancements

- Payment integration
- Mobile app
- AI underwriting
- Chatbot support

# 20. Sign-off

Business Owner: TBD
Technology Lead: TBD
QA Lead: TBD
