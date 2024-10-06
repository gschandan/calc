using Microsoft.AspNetCore.Mvc;

namespace calc.api.controllers;

[ApiController]
[Route("api/[controller]")]
public class TestController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new { message = "Hello from calc API!" });
    }
}
