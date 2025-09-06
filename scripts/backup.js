const { createClient } = require('@sanity/client')
const fs = require('fs')
const path = require('path')

// Manually load .env.local
const envPath = path.resolve('.env.local')
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8')
  envFile.split('\n').forEach(line => {
    const [key, value] = line.split('=')
    if (key && value) {
      process.env[key.trim()] = value.trim()
    }
  })
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2023-01-01'
})

async function backup() {
  try {
    console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
    console.log('Fetching all documents...')

    const documents = await client.fetch('*')

    const backupData = {
      exportedAt: new Date().toISOString(),
      documents: documents
    }

    const filename = `backup-${new Date().toISOString().split('T')[0]}.json`
    fs.writeFileSync(filename, JSON.stringify(backupData, null, 2))

    console.log(`Backup saved to ${filename}`)
    console.log(`Exported ${documents.length} documents`)
  } catch (error) {
    console.error('Backup failed:', error)
  }
}

backup()
