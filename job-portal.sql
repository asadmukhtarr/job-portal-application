-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 12, 2026 at 03:57 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `job-portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `applicants`
--

CREATE TABLE `applicants` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `vacancy_id` int(11) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `applicants`
--

INSERT INTO `applicants` (`id`, `user_id`, `vacancy_id`, `status`, `created_at`, `updated_at`) VALUES
(1, 3, 5, 1, '2026-01-03 08:50:28', '2026-01-10 08:49:28'),
(2, 4, 5, 3, '2026-01-10 08:30:36', '2026-02-22 13:12:17');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('laravel-cache-rehna.ali002@gmail.com|127.0.0.1', 'i:3;', 1775829021),
('laravel-cache-rehna.ali002@gmail.com|127.0.0.1:timer', 'i:1775829021;', 1775829021);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `companies`
--

CREATE TABLE `companies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` text DEFAULT NULL,
  `industry` text DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `size` text DEFAULT NULL,
  `address` text DEFAULT NULL,
  `email` text DEFAULT NULL,
  `phone` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `companies`
--

INSERT INTO `companies` (`id`, `user_id`, `name`, `industry`, `website`, `size`, `address`, `email`, `phone`, `description`, `logo`, `created_at`, `updated_at`) VALUES
(2, 1, 'Webeducatorz', 'Informaiton Technology', 'https://webeducatorz.org/', '11-50 employees', 'Opposite to zainabia hospital main multan road lahore', 'info@webeducatorz.org', '03264300993', 'Pakistan first E-learning platform to provide in house trainings of development related courses. Webeducatorz is offering 50+ development related course to learn online live classes with LMS facility.', 'companies/1766239202.jpeg', '2025-12-20 09:00:02', '2025-12-20 09:00:02');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_12_19_132750_create_companies_table', 2),
(5, '2025_12_19_134325_create_vacancies_table', 3),
(6, '2025_12_26_140436_create_applicants_table', 4),
(7, '2025_12_28_133803_create_profiles_table', 4),
(8, '2026_01_23_135723_create_personal_access_tokens_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `password_reset_tokens`
--

INSERT INTO `password_reset_tokens` (`email`, `token`, `created_at`) VALUES
('axad03213@gmail.com', '$2y$12$rAWVq1zUN7Hgh.NxXU64X.aJhMaqwrg/D5h8tfaMvFNtizk20z6R.', '2025-11-30 09:04:11');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` text NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `profiles`
--

CREATE TABLE `profiles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `picture` text DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `location` text DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `headline` text DEFAULT NULL,
  `about` text DEFAULT NULL,
  `current_position` text DEFAULT NULL,
  `experience_level` text DEFAULT NULL,
  `skills` text DEFAULT NULL,
  `resume` text DEFAULT NULL,
  `linkedn` text DEFAULT NULL,
  `github` text DEFAULT NULL,
  `twitter` text DEFAULT NULL,
  `website` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `profiles`
--

INSERT INTO `profiles` (`id`, `picture`, `user_id`, `phone`, `location`, `dob`, `gender`, `headline`, `about`, `current_position`, `experience_level`, `skills`, `resume`, `linkedn`, `github`, `twitter`, `website`, `created_at`, `updated_at`) VALUES
(1, NULL, 1, '03264300993', 'Lahore,pakistan', '1997-08-18', 'male', 'Full Stack Web Developer', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nemo.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, nemo.', 'Software Engineering', 'mid', 'HTML, CSS, JavaScript, React, Laravel, PHP, MySQL, REST APIs, Git', 'resume/1767361074.pdf', 'https://pk.linkedin.com/', 'https://pk.linkedin.com/', 'https://pk.linkedin.com/', 'https://pk.linkedin.com/', '2025-12-30 09:31:00', '2026-01-02 08:37:54'),
(2, NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'resume/1767447988.pdf', NULL, NULL, NULL, NULL, '2026-01-03 08:46:30', '2026-01-03 08:46:30'),
(3, NULL, 4, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'resume/1768051818.pdf', NULL, NULL, NULL, NULL, '2026-01-10 08:30:19', '2026-01-10 08:30:19'),
(4, NULL, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'resume/1775829029.pdf', NULL, NULL, NULL, NULL, '2026-04-10 08:50:30', '2026-04-10 08:50:30');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('5e05TmQKB1R70zZNw04BAR65Ht4UYsAnikDe5oPT', 1, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTo1OntzOjY6Il90b2tlbiI7czo0MDoiZk0xWFFBcXl6TDc2d0x4VFBXM05lSjFFUklYbWhKWVBQcmpPaW9jSiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjk6Imh0dHA6Ly9sb2NhbGhvc3Q6NDA0MC9jb250YWN0IjtzOjU6InJvdXRlIjtzOjc6ImNvbnRhY3QiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aToxO3M6NDoiYXV0aCI7YToxOntzOjIxOiJwYXNzd29yZF9jb25maXJtZWRfYXQiO2k6MTc3NTg1MjMzNDt9fQ==', 1775852411),
('fxyldtxmbJ0OgVt4OfpxwGtTDKT8Gj08U5F1Yuaj', 5, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiUVdRZ3Q0aGlBdzJ3ZTNVbmZycVAzQWJYaEw1c3hLU2lmOGM2QnB1RSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6Mjc6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMS9qb2IvNSI7czo1OiJyb3V0ZSI7czo5OiJzaG93LmpvYnoiO31zOjY6Il9mbGFzaCI7YToyOntzOjM6Im9sZCI7YTowOnt9czozOiJuZXciO2E6MDp7fX1zOjUwOiJsb2dpbl93ZWJfNTliYTM2YWRkYzJiMmY5NDAxNTgwZjAxNGM3ZjU4ZWE0ZTMwOTg5ZCI7aTo1O30=', 1775829042),
('u97K2HwMnKz4bDPONPEND2cj5k000xoeCOEHpbFp', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZzVSSmNkSWxpVWR4YmUzRkFjcjV6THdsREE1dU1TNVIyTW1lZ2RydSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MzA6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9yZWdpc3RlciI7czo1OiJyb3V0ZSI7czo4OiJyZWdpc3RlciI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1776001629);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Asad Mukhtar', 'axad03213@gmail.com', NULL, '$2y$12$PRZ6vbTh40t8rWZ4sOmaPOHmr8juJ4iojZcs.nzsZZidbopRe2C0S', 'WV3AKMiY39JR4uN2F94Zs7ClSrmfYPS5gfAp2j45z6J1TZkBDlXyZg6nArWm', '2025-11-30 09:00:16', '2025-11-30 09:00:16'),
(2, 'Basit Akhtar', 'basit.akhter786@gmail.com', NULL, '$2y$12$6T.L3oRFCx5yw.e2p9pcvOPzKkRQj0pcKVpx4ydn9kN7gxArHz.T6', 'qHzggp9FlV7jGMzMDluL8SYQHkDbbyzgdVxJM03AnTAOnoMrW7DI17Jpqtg7', '2025-12-12 08:26:47', '2025-12-12 08:26:47'),
(3, 'Muhammad Asif', 'm.asif03213@gmail.com', NULL, '$2y$12$aSRReCK9GlrynpXFNNAD6O/5vz36rdP/mbYQDDPxKLEh83rF/Jqha', NULL, '2026-01-03 08:42:43', '2026-01-03 08:42:43'),
(4, 'Muhammad Rehan Ali', 'rehan.ali9449073@gmail.com', NULL, '$2y$12$PRZ6vbTh40t8rWZ4sOmaPOHmr8juJ4iojZcs.nzsZZidbopRe2C0S', 'o0lI63oYHSl7CYsFL6S1xjBcYNMSFfSZWV6lh5OuYyaANp6brnmrAyWM9teh', '2026-01-10 08:29:19', '2026-01-16 08:47:30'),
(5, 'Muhammad Rehan', 'rehan.ali932@gmail.com', NULL, '$2y$12$..oOhQGGqpLJpMf6mF9wT.FIzq7hZKuD4qUGHfGh0xq8xwSEUxcwG', NULL, '2026-04-10 08:49:57', '2026-04-10 08:49:57');

-- --------------------------------------------------------

--
-- Table structure for table `vacancies`
--

CREATE TABLE `vacancies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `company_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `title` text DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `location` text DEFAULT NULL,
  `salary` text DEFAULT NULL,
  `skills` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `requirements` text DEFAULT NULL,
  `vacancies` int(191) DEFAULT NULL,
  `experience` text DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  `views` int(191) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `vacancies`
--

INSERT INTO `vacancies` (`id`, `company_id`, `user_id`, `title`, `type`, `location`, `salary`, `skills`, `description`, `requirements`, `vacancies`, `experience`, `status`, `views`, `created_at`, `updated_at`) VALUES
(1, 2, 1, 'Full Stack Web Developer', 'Full-time', 'Lahore, Pakistan (Hybrid)', 'PKR 150,000 – 250,000 per month', 'HTML, CSS, JavaScript, React, Laravel, PHP, MySQL, REST APIs, Git', 'We are looking for a skilled Full Stack Web Developer to build and maintain modern web applications, working on both frontend and backend systems.', '2+ years of experience in full stack development, strong knowledge of React and Laravel, experience with databases and APIs, good problem-solving skills, ability to work in a team.', 2, 'Mid Level', 0, 0, '2025-12-26 08:29:06', '2025-12-26 08:29:06'),
(2, 2, 1, 'Laravel Developer', 'Full-time', 'Lahore, Pakistan (On-site)', 'PKR 120,000 – 200,000 per month', 'PHP, Laravel, MySQL, REST APIs, Blade, Livewire, Git, HTML, CSS, JavaScript', 'We are seeking a Laravel Developer to develop, maintain, and optimize web applications using the Laravel framework.', '1–3 years of experience with Laravel, strong understanding of MVC architecture, experience with databases and APIs, familiarity with authentication and security best practices, teamwork and problem-solving skills.', 2, 'Senior Level', 0, 2, '2025-12-26 08:44:11', '2026-01-10 09:21:57'),
(3, 2, 1, 'Full Stack Web Developer', 'Full-time', 'Lahore, Pakistan (Hybrid)', 'PKR 150,000 – 250,000 per month', 'HTML, CSS, JavaScript, React, Laravel, PHP, MySQL, REST APIs, Git', 'We are looking for a skilled Full Stack Web Developer to build and maintain modern web applications, working on both frontend and backend systems.', '2+ years of experience in full stack development, strong knowledge of React and Laravel, experience with databases and APIs, good problem-solving skills, ability to work in a team.', 2, 'Mid Level', 0, 2, '2025-12-26 08:29:06', '2026-04-10 08:49:08'),
(4, 2, 1, 'Laravel Developer', 'Full-time', 'Lahore, Pakistan (On-site)', 'PKR 120,000 – 200,000 per month', 'PHP, Laravel, MySQL, REST APIs, Blade, Livewire, Git, HTML, CSS, JavaScript', 'We are seeking a Laravel Developer to develop, maintain, and optimize web applications using the Laravel framework.', '1–3 years of experience with Laravel, strong understanding of MVC architecture, experience with databases and APIs, familiarity with authentication and security best practices, teamwork and problem-solving skills.', 2, 'Senior Level', 0, 9, '2025-12-26 08:44:11', '2026-01-03 08:26:00'),
(5, 2, 1, 'Full Stack Web Developer', 'Full-time', 'Lahore, Pakistan (Hybrid)', 'PKR 150,000 – 250,000 per month', 'HTML, CSS, JavaScript, React, Laravel, PHP, MySQL, REST APIs, Git', 'We are looking for a skilled Full Stack Web Developer to build and maintain modern web applications, working on both frontend and backend systems.', '2+ years of experience in full stack development, strong knowledge of React and Laravel, experience with databases and APIs, good problem-solving skills, ability to work in a team.', 2, 'Mid Level', 0, 44, '2025-12-26 08:29:06', '2026-04-10 08:50:42'),
(6, 2, 1, 'Professional Laravel Developer', 'Full-time', 'Lahore, Pakistan (On-site)', 'PKR 120,000 – 200,000 per month', 'PHP, Laravel, MySQL, REST APIs, Blade, Livewire, Git, HTML, CSS, JavaScript', 'We are seeking a Laravel Developer to develop, maintain, and optimize web applications using the Laravel framework.', '1–3 years of experience with Laravel, strong understanding of MVC architecture, experience with databases and APIs, familiarity with authentication and security best practices, teamwork and problem-solving skills.', 2, 'Mid Level', 1, 0, '2025-12-26 08:44:11', '2026-01-02 08:55:33'),
(9, 2, 1, 'Need An AI Developer', 'Contract', 'New Yark', '120000', 'Html,CSS , Bootstrap,JS,Python,NodeJS,Laravel', 'Pakistan first E-learning platform to provide in house trainings of development related courses. Webeducatorz is offering 50+ development related course to learn online live classes with LMS facility. Pakistan first E-learning platform to provide in house trainings of development related courses. Webeducatorz is offering 50+ development related course to learn online live classes with LMS facility.', 'Pakistan first E-learning platform to provide in house trainings of development related courses. Webeducatorz is offering 50+ development related course to learn online live classes with LMS facility.', 10, 'Senior Level', 0, 1, '2026-04-05 08:29:27', '2026-04-10 08:48:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `applicants`
--
ALTER TABLE `applicants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `companies`
--
ALTER TABLE `companies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`),
  ADD KEY `personal_access_tokens_expires_at_index` (`expires_at`);

--
-- Indexes for table `profiles`
--
ALTER TABLE `profiles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `vacancies`
--
ALTER TABLE `vacancies`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `applicants`
--
ALTER TABLE `applicants`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `companies`
--
ALTER TABLE `companies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `profiles`
--
ALTER TABLE `profiles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `vacancies`
--
ALTER TABLE `vacancies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
