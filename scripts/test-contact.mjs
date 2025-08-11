#!/usr/bin/env node

/**
 * Contact API smoke test
 * Usage: npm run test:contact
 */

const testPayload = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '01234567890',
  projectType: 'kitchen',
  location: 'Manchester',
  message: 'This is a test message from the contact API smoke test.'
}

async function testContactAPI() {
  try {
    console.log('🧪 Testing contact API at http://localhost:3000/api/contact')
    console.log('📝 Payload:', JSON.stringify(testPayload, null, 2))
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    })
    
    const result = await response.json()
    
    console.log('\n📊 Response:')
    console.log('Status:', response.status)
    console.log('Body:', JSON.stringify(result, null, 2))
    
    if (response.ok) {
      console.log('\n✅ Contact API test passed!')
    } else {
      console.log('\n❌ Contact API test failed!')
      process.exit(1)
    }
    
  } catch (error) {
    console.error('\n💥 Test failed with error:', error.message)
    console.log('\n🔍 Make sure the development server is running: npm run dev')
    process.exit(1)
  }
}

testContactAPI()
