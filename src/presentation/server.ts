import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendLogEmailLogs } from "../domain/use-cases/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repository/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
	new FileSystemDatasource()
);

const emailService = new EmailService();

export class Server {
	public static start() {
		console.log("Server started...");

		// TODO: Mandar email
		// new SendLogEmailLogs(
		// 	emailService,
		// 	fileSystemLogRepository
		// ).execute([
		// 	"luis_28_92lara@hotmail.com",
		// 	// 	"luislara840@gmail.com",
		// ]);
		// emailService.sendEmailwithFileSystemLogs([
		// 	"luis_28_92lara@hotmail.com",
		// 	"luislara840@gmail.com",
		// ]);

		// CronService.createJob("*/5 * * * * *", () => {
		// 	const url = "http://google.com";
		// 	new CheckService(
		// 		fileSystemLogRepository,
		// 		() => console.log(`${url} is ok`),
		// 		(error) => console.log(error)
		// 	).execute(url);
		// 	// new CheckService().execute("http://localhost:3000/");
		// });
	}
}
