export const firstNameRejexPattern={
    required: true,
    minLength: 3,
    maxLength: 20,
    pattern: /^[A-Za-z]+$/i
}

export const emailPatternRejexPattern={
  required: "* EMAIL REQUIRED",
  pattern: {
  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  message: "invalid email address  "}
}

export const passwordRejexPattern={
    minLength: 8,
    pattern: {              
      value: /^[A-Z0-9._%+-]/i,
    }
}
