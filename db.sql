-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: gb
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `areas`
--

DROP TABLE IF EXISTS `areas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `areas` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `areas_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `areas`
--

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;
/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bio` text COLLATE utf8mb4_unicode_ci,
  `resume` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES ('e3a923dc-a6f1-4bb8-ac54-f53060c304cb','Jean-Luc Leblanc','Jean-Luc Leblanc est un auteur français qui a écrit plusieurs livres sur l\'histoire et la culture françaises. Il a également été professeur à l\'Université de Paris et a donné des conférences à travers le monde. Il se consacre maintenant à l\'écriture et à l\'enseignement.','-Professeur à l\'Université de Paris, 2012-2016 -Auteur, 2009-présent -Conférencier invite 2009-2016','2023-02-08 21:37:25','2023-02-08 21:37:25'),('fcb72eb3-c9e2-459d-ab59-9caa0e7c9ea9','Khady Kébé',NULL,NULL,'2023-02-08 21:32:27','2023-02-08 21:32:27');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document_copies`
--

DROP TABLE IF EXISTS `document_copies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document_copies` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sub_reference` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('available','checked_out','lost','borrowed') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'available',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `document_copies_sub_reference_unique` (`sub_reference`),
  KEY `document_copies_document_id_foreign` (`document_id`),
  CONSTRAINT `document_copies_document_id_foreign` FOREIGN KEY (`document_id`) REFERENCES `documents` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_copies`
--

LOCK TABLES `document_copies` WRITE;
/*!40000 ALTER TABLE `document_copies` DISABLE KEYS */;
/*!40000 ALTER TABLE `document_copies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document_has_authors`
--

DROP TABLE IF EXISTS `document_has_authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document_has_authors` (
  `document_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  UNIQUE KEY `document_has_authors_document_id_author_id_unique` (`document_id`,`author_id`),
  KEY `document_has_authors_author_id_foreign` (`author_id`),
  CONSTRAINT `document_has_authors_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`) ON DELETE CASCADE,
  CONSTRAINT `document_has_authors_document_id_foreign` FOREIGN KEY (`document_id`) REFERENCES `documents` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_has_authors`
--

LOCK TABLES `document_has_authors` WRITE;
/*!40000 ALTER TABLE `document_has_authors` DISABLE KEYS */;
/*!40000 ALTER TABLE `document_has_authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document_has_slugs`
--

DROP TABLE IF EXISTS `document_has_slugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document_has_slugs` (
  `document_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  UNIQUE KEY `document_has_slugs_document_id_slug_id_unique` (`document_id`,`slug_id`),
  KEY `document_has_slugs_slug_id_foreign` (`slug_id`),
  CONSTRAINT `document_has_slugs_document_id_foreign` FOREIGN KEY (`document_id`) REFERENCES `documents` (`id`) ON DELETE CASCADE,
  CONSTRAINT `document_has_slugs_slug_id_foreign` FOREIGN KEY (`slug_id`) REFERENCES `slugs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_has_slugs`
--

LOCK TABLES `document_has_slugs` WRITE;
/*!40000 ALTER TABLE `document_has_slugs` DISABLE KEYS */;
/*!40000 ALTER TABLE `document_has_slugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `documents`
--

DROP TABLE IF EXISTS `documents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `documents` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `summary` text COLLATE utf8mb4_unicode_ci,
  `reference` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `raise` int unsigned NOT NULL DEFAULT '0',
  `author_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum('available','checked_out','lost') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'available',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `documents_reference_unique` (`reference`),
  KEY `documents_author_id_foreign` (`author_id`),
  CONSTRAINT `documents_author_id_foreign` FOREIGN KEY (`author_id`) REFERENCES `authors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `documents`
--

LOCK TABLES `documents` WRITE;
/*!40000 ALTER TABLE `documents` DISABLE KEYS */;
INSERT INTO `documents` VALUES ('dd107364-8f99-4093-b896-2eb4d36fd623','The War of the Womb','In a world where magic is commonplace and the barriers between life and death are blurred, the kingdom of Lydar faces a new and terrifying conflict. The War of the Womb has been declared, and the fate of the kingdom hangs in the balance. As a young queen rises to power, she must lead her kingdom against the forces of darkness and protect her people from the wrath of an ancient enemy. With courage and determination, she will do whatever it takes to secure the kingdom\'s future, even if it means risking her own life. Cover: A beautiful young queen wearing a crown of thorns stands in front of a dark and mysterious landscape. A fierce battle rages in the sky above her, a clash between two armies of angels and demons. In the background, a castle towers over a field of destruction, its walls and towers in ruins.','DOC-63E4',0,'e3a923dc-a6f1-4bb8-ac54-f53060c304cb','available','2023-02-08 21:46:53','2023-02-08 21:46:53');
/*!40000 ALTER TABLE `documents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `failed_jobs` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `media` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `collection_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `file_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mime_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disk` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `conversions_disk` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `size` bigint unsigned NOT NULL,
  `manipulations` json NOT NULL,
  `custom_properties` json NOT NULL,
  `generated_conversions` json NOT NULL,
  `responsive_images` json NOT NULL,
  `order_column` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `media_uuid_unique` (`uuid`),
  KEY `media_model_type_model_id_index` (`model_type`,`model_id`),
  KEY `media_order_column_index` (`order_column`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_10_12_000000_create_users_table',1),(2,'2014_10_12_100000_create_password_resets_table',1),(3,'2019_08_19_000000_create_failed_jobs_table',1),(4,'2019_12_14_000001_create_personal_access_tokens_table',1),(5,'2022_12_08_11758_create_slugs_table',1),(6,'2022_12_08_210140_create_authors_table',1),(7,'2022_12_08_210145_create_documents_table',1),(8,'2022_12_08_211359_create_document_copies_table',1),(9,'2022_12_08_211612_create_areas_table',1),(10,'2022_12_08_212134_create_reservations_table',1),(12,'2022_12_08_224549_create_document_has_authors',1),(13,'2022_12_08_224914_create_document_has_slugs',1),(14,'2023_02_04_214144_create_shelf_table',1),(15,'2023_02_08_203417_create_shelf_has_slugs_table',1),(21,'2023_02_08_214328_create_media_table',2),(22,'2022_12_08_212912_create_permission_tables',3);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_permissions`
--

DROP TABLE IF EXISTS `model_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_permissions`
--

LOCK TABLES `model_has_permissions` WRITE;
/*!40000 ALTER TABLE `model_has_permissions` DISABLE KEYS */;
INSERT INTO `model_has_permissions` VALUES (1,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193'),(2,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193'),(3,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193'),(4,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193'),(5,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193'),(6,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193'),(7,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193');
/*!40000 ALTER TABLE `model_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `model_has_roles`
--

DROP TABLE IF EXISTS `model_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `model_has_roles` (
  `role_id` bigint unsigned NOT NULL,
  `model_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`),
  CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `model_has_roles`
--

LOCK TABLES `model_has_roles` WRITE;
/*!40000 ALTER TABLE `model_has_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `model_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'document_index','api','2023-02-08 23:03:19','2023-02-08 23:03:19'),(2,'document_store','api','2023-02-08 23:03:47','2023-02-08 23:03:47'),(3,'document_delete','api','2023-02-08 23:04:07','2023-02-08 23:04:07'),(4,'author_index','api','2023-02-08 23:04:17','2023-02-08 23:04:17'),(5,'author_delete','api','2023-02-08 23:04:24','2023-02-08 23:04:24'),(6,'store_store','api','2023-02-08 23:04:35','2023-02-08 23:04:35'),(7,'author_store','api','2023-02-08 23:05:03','2023-02-08 23:05:03');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
INSERT INTO `personal_access_tokens` VALUES (1,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','594f7309471554661a3ecd4549dd59fc225af7b6801e740cd10e699f441b2d1c','[\"*\"]',NULL,NULL,'2023-02-08 20:56:10','2023-02-08 20:56:10'),(3,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','d25315b987495d44939e9c97420d2f2c8e86ef319622a509f92dbb754b3f330d','[\"*\"]',NULL,NULL,'2023-02-08 21:08:46','2023-02-08 21:08:46'),(4,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','19cccc6a05d5f65f6cd49a376b08d8a282c140da5dc609a88f603f5b9d8dd547','[\"*\"]','2023-02-14 00:12:28',NULL,'2023-02-08 21:09:37','2023-02-14 00:12:28'),(5,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','afe434774e761185f2ab88685b9a84d7e5477f1ec501ce0c9260b96608b74f35','[\"*\"]',NULL,NULL,'2023-02-08 22:28:45','2023-02-08 22:28:45'),(6,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','d7abe03b7e2ac003a182aab082089ef090b75916183468b10cc681e6d3f43e58','[\"*\"]',NULL,NULL,'2023-02-08 22:39:33','2023-02-08 22:39:33'),(7,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','8b34dacd04f9ed05c3f64e2c062665b3db6ed940f443bb55a1ea653a16c4b4b6','[\"*\"]',NULL,NULL,'2023-02-08 23:22:54','2023-02-08 23:22:54'),(8,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','343c59617c36e9187405cb264f126076761fe520cd965a55b54cfd44ffd282b9','[\"*\"]',NULL,NULL,'2023-02-13 21:11:08','2023-02-13 21:11:08'),(9,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','8b46daed5f450321cae84195d5d7039d524718b61712bc179dffb47448f88d98','[\"*\"]',NULL,NULL,'2023-02-13 21:13:18','2023-02-13 21:13:18'),(10,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','87f3115094a28c53eedcb2df2ad12e16e3254216a5f367d6e4581b1666fefcc4','[\"*\"]',NULL,NULL,'2023-02-13 21:16:07','2023-02-13 21:16:07'),(11,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','a5442459aeb93a75b5052c95c4e2d6a7370a7b371e92c29797036d60005f5a9a','[\"*\"]',NULL,NULL,'2023-02-13 23:22:41','2023-02-13 23:22:41'),(12,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','1a670f4ded71646859405d0efd16ea9a2f3cc02c3a2d9bee6a7c5daa5980f81a','[\"*\"]',NULL,NULL,'2023-02-13 23:25:10','2023-02-13 23:25:10'),(13,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','f825198e84cd2cbfa1e00b16d804beaf874014f6ce1800859b0247fc8d5dd7fc','[\"*\"]',NULL,NULL,'2023-02-13 23:25:53','2023-02-13 23:25:53'),(14,'App\\Models\\User','d2171bac-1711-4407-b890-daa7e762a193','auth_token','fcfb0168b2ee36a35516e584f07b72a5c7ce86bfdd3fb048c4a97fc37e1fe471','[\"*\"]','2023-02-14 00:44:02',NULL,'2023-02-13 23:28:51','2023-02-14 00:44:02');
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` enum('reserved','pending','expired','returned') COLLATE utf8mb4_unicode_ci NOT NULL,
  `document_copy_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reserved_at` timestamp NOT NULL,
  `expires_at` timestamp NOT NULL,
  `checked_out_at` timestamp NULL DEFAULT NULL,
  `returned_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `reservations_user_id_foreign` (`user_id`),
  KEY `reservations_document_copy_id_foreign` (`document_copy_id`),
  CONSTRAINT `reservations_document_copy_id_foreign` FOREIGN KEY (`document_copy_id`) REFERENCES `document_copies` (`id`),
  CONSTRAINT `reservations_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_has_permissions`
--

DROP TABLE IF EXISTS `role_has_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_has_permissions` (
  `permission_id` bigint unsigned NOT NULL,
  `role_id` bigint unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `role_has_permissions_role_id_foreign` (`role_id`),
  CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_has_permissions`
--

LOCK TABLES `role_has_permissions` WRITE;
/*!40000 ALTER TABLE `role_has_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `role_has_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `guard_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelf`
--

DROP TABLE IF EXISTS `shelf`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shelf` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `area_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `shelf_level_area_id_unique` (`level`,`area_id`),
  KEY `shelf_area_id_foreign` (`area_id`),
  CONSTRAINT `shelf_area_id_foreign` FOREIGN KEY (`area_id`) REFERENCES `areas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelf`
--

LOCK TABLES `shelf` WRITE;
/*!40000 ALTER TABLE `shelf` DISABLE KEYS */;
/*!40000 ALTER TABLE `shelf` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shelf_has_slugs`
--

DROP TABLE IF EXISTS `shelf_has_slugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shelf_has_slugs` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `shelf_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `shelf_has_slugs_slug_id_foreign` (`slug_id`),
  KEY `shelf_has_slugs_shelf_id_foreign` (`shelf_id`),
  CONSTRAINT `shelf_has_slugs_shelf_id_foreign` FOREIGN KEY (`shelf_id`) REFERENCES `shelf` (`id`) ON DELETE CASCADE,
  CONSTRAINT `shelf_has_slugs_slug_id_foreign` FOREIGN KEY (`slug_id`) REFERENCES `slugs` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shelf_has_slugs`
--

LOCK TABLES `shelf_has_slugs` WRITE;
/*!40000 ALTER TABLE `shelf_has_slugs` DISABLE KEYS */;
/*!40000 ALTER TABLE `shelf_has_slugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slugs`
--

DROP TABLE IF EXISTS `slugs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `slugs` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sluggable` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slugs_slug_unique` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slugs`
--

LOCK TABLES `slugs` WRITE;
/*!40000 ALTER TABLE `slugs` DISABLE KEYS */;
/*!40000 ALTER TABLE `slugs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notification_token` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('c4b55085-c337-4781-907c-be67dc26b3ec','Khady Kébé','khady.kebe',NULL,'781234566',NULL,NULL,NULL,NULL,'$2y$10$xbzQNrtXRMJoQAxS5CgZZ.GFpMVF7ruHjyYBX2bGSUj2oT1D/I6FO',NULL,'2023-02-08 21:25:02','2023-02-08 21:25:02'),('d2171bac-1711-4407-b890-daa7e762a193','Mor Diaw','mor.diaw','mor.diaw@gmail.com','781879981',NULL,'Thies',NULL,NULL,'$2y$10$AKSK.fJfKXMKFXacc9xIsuSlOt6B9M3Y4v9qdGqjRl8pOmf3PZKQ.',NULL,'2023-02-08 20:55:54','2023-02-08 21:21:35');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-16 22:11:27
