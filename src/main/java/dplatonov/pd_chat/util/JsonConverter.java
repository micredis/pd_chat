package dplatonov.pd_chat.util;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.MapperFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;

public class JsonConverter {
  private static final Logger log = LogManager.getLogger(JsonConverter.class);
  private static final ObjectMapper mapper = new ObjectMapper();

  static {
    mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
    mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
    mapper.disable(MapperFeature.DEFAULT_VIEW_INCLUSION);
  }

  /**
   * This method convert object to JSON
   *
   * @param object which we want convert to JSON
   * @return JSON as String
   */
  public static String toJson(Object object) {
    String json;
    try {
      json = mapper.writeValueAsString(object);
    } catch (JsonProcessingException e) {
      throw new IllegalArgumentException(
          "JSON-CONVERTER-001: encountered error converting to json");
    }

    return json;
  }

  /**
   * This method converts JSON to class Object. You should cast this Object to relative Object
   *
   * @param json which we want map to Object
   * @param type TypeReference of Object in which we want map json
   * @return Object
   */
  public static Object fromJson(String json, TypeReference type) {
    Object obj = null;
    try {
      obj = mapper.reader().forType(type).readValue(json);
    } catch (IOException e) {
      log.error("JSON-CONVERTER-003: encountered error converting from json");
    }

    return obj;
  }

  /**
   * This method converts JSON to class Object. You should cast this Object to relative object. If
   * exception is happening will return <b>null</b>.
   *
   * @param json which we want map to Object
   * @param type of Object in which we want map json
   * @param <T> class in which we want map json
   * @return Object
   */
  public static <T> Object fromJson(String json, Class<T> type) {
    Object obj;
    try {
      obj = mapper.reader().forType(type).readValue(json);
    } catch (IOException e) {
      log.error(
          "JSON-CONVERTER-002: encountered error converting from json "
              + json
              + " to class type "
              + type,
          e);
      return null;
    }

    return obj;
  }
}
