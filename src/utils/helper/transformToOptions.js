export const transformToOptions = (data) => {
    if (!data) return [];
  
    if (Array.isArray(data)) {
      return data.map((item) => ({
        value: item._id,
        label: item.name,
      }));
    }
  
    if (typeof data === "object" && data !== null) {
      return {
        value: data._id,
        label: data.name,
      };
    }

    if (typeof data === "string" && data !== null) {
      return {
        value: data,
        label: data.charAt(0).toUpperCase() + data.slice(1),
      };
    }
  
    return [];
  };