import { formatDistance } from './src/locale/kn/_lib/formatDistance/index.ts';

console.log("Testing Kannada formatDistance...");

const testCases = [
    { token: 'aboutXWeeks', count: 1, expected: 'ಸುಮಾರು 1 ವಾರ' },
    { token: 'aboutXWeeks', count: 2, expected: 'ಸುಮಾರು 2 ವಾರಗಳು' },
    { token: 'xWeeks', count: 1, expected: '1 ವಾರ' },
    { token: 'xWeeks', count: 2, expected: '2 ವಾರಗಳು' },
];

let failed = false;

testCases.forEach(({ token, count, expected }) => {
    const result = formatDistance(token, count);
    if (result !== expected) {
        console.error(`FAILED: ${token} (${count}) -> Expected "${expected}", got "${result}"`);
        failed = true;
    } else {
        console.log(`PASSED: ${token} (${count}) -> "${result}"`);
    }
});

if (failed) {
    console.error("Verification FAILED");
    process.exit(1);
} else {
    console.log("Verification PASSED");
}
