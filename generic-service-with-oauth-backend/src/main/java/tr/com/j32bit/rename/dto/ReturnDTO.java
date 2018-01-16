package tr.com.j32bit.rename.dto;

public class ReturnDTO {
	private boolean status;
	private String message;

	public ReturnDTO() {
		super();
	}

	public ReturnDTO(boolean status, String message) {
		super();
		this.status = status;
		this.message = message;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
}
