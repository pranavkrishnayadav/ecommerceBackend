import productModule from "../models/productModule.js";

export const getallproducts = async (req, res) => {
  try {
    const products = await productModule.find();

    return res.status(200).json({
      status: "Sucess",
      data: {
        products,
      },
    });
  } catch (error) {
    res.satus(404).json({
      status: "Failed",
      message: error.message,
    });
  }
};

//Add Product

export const addproduct = async (req, res) => {
  try {
    const { p_id, p_name, p_description, p_cat, p_url, p_cost } = req.body;

    const product = await productModule.create({
      p_id,
      p_name,
      p_description,
      p_cat,
      p_url,
      p_cost,
    });
    res.status(201).json({
      status: "Success",
      data: {
        product,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      message: error.meassage,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Assuming the product ID is passed in the request parameters
    const updateData = req.body; // Assuming the updated data is passed in the request body

   
    // Update the product in the database
    const updatedProduct = await productModule.findByIdAndUpdate(productId,updateData,{ new: true }
    );

    // Return the updated product in the response
    return res.status(200).json({
      status: "Success",
      data: {
        product: updatedProduct,
      },
    });
  } catch (error) {
    // Handle errors if any
    res.status(404).json({
      status: "Failed",
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id; // Assuming the product ID is passed in the request parameters

    // Delete the product from the database
    await productModule.findByIdAndDelete(productId);

    // Return success message in the response
    return res.status(200).json({
      status: "Success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    // Handle errors if any
    res.status(404).json({
      status: "Failed",
      message: error.message,
    });
  }
};
