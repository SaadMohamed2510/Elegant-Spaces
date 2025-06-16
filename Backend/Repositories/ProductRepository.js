const supabase = require("../Config/SupabaseClient");

async function CreateProduct(product) {
    const{data, error} = await supabase
    .from("Products")
    .insert([product])
    .single();
    if(error) throw new error(error.message);

    return data;
}

module.exports = {
    CreateProduct

};