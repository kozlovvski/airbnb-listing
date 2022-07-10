exports = async (input) => {
  const page = input && input.page || 0;
  const pageSize = 20;
  
  const cluster = context.services.get("mongodb-atlas")
  const collection = cluster.db('sample_airbnb').collection('listingsAndReviews')
  
  return await collection.find({}).skip(page * pageSize).limit(pageSize).toArray()
}